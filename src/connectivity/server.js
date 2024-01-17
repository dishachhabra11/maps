const admin = require("firebase-admin");
const serviceAccount = require("./firebase/jsom-c23a1-firebase-adminsdk-a4evw-b0a963f809.json");

const { ref, onValue } = require("firebase/database");
const fs = require("fs");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const firestore = admin.firestore();
  const collectionRef = firestore.collection("/pid");
  let markerData = [];

  collectionRef.onSnapshot(
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const documentData = change.doc.data();

        if (change.type === "added" || change.type === "modified") {
          console.log("New/Modified document:", documentData);
          updateMarkerData(documentData);
        } else if (change.type === "removed") {
          console.log("Removed document:", documentData);
          removeMarkerData(documentData);
        }
      });
    },
    (error) => {
      console.error("Error in real-time listener:", error);
    }
  );

  function updateMarkerData(data) {
    markerData.push(data);
    writeToFile(
      "markerData.js",
      `const markerData = ${JSON.stringify(markerData)};`
    );
  }

  function removeMarkerData(data) {
    markerData = markerData.filter((item) => item.id !== data.id);
    writeToFile(
      "markerData.js",
      `const markerData = ${JSON.stringify(markerData)};`
    );
  }

  function writeToFile(filePath, data) {
    fs.writeFileSync(filePath, data);
    console.log("Data written to file successfully.");
  }

  const tofetchthedatafromdb = (callback) => {
    const dataref = ref(collectionRef);

    onValue(dataref, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });
  };

  const filterGarbage = (callback, category, toCompare) => {
    const dataRef = ref(collectionRef);

    onValue(dataRef, (snapshot) => {
      const data = [];

      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();

        if (childData && childData[category] === toCompare) {
          data.push(childData);
        }
      });

      callback(data);
    });
  };

  filterGarbage(
    (filteredData) => {
      console.log("Filtered Data:", filteredData);
    },
    "Garbage Tax",
    "unpaid"
  );

  module.exports = { tofetchthedatafromdb, filterGarbage };

} catch (error) {
  console.error("Error initializing Firebase Admin SDK:", error);
}
