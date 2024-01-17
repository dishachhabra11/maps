const admin = require('firebase-admin');
const serviceAccount = require('./firebase/jsom-c23a1-firebase-adminsdk-a4evw-b0a963f809.json');
const fs = require('fs');

const filePath = 'markerData.js';
let markerData = [];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const collectionRef = firestore.collection('/pid');

// Function to fetch initial data and set up real-time listener
async function initializeServer() {
  try {
    // Fetch initial data
    const initialSnapshot = await collectionRef.get();
    initialSnapshot.forEach((doc) => {
      const documentData = doc.data();
      updateMarkerData(documentData);
    });

    // Set up real-time listener
    collectionRef.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const documentData = change.doc.data();

        if (change.type === 'added') {
          console.log('New document:', documentData);
          updateMarkerData(documentData);
        }
        if (change.type === 'modified') {
          console.log('Modified document:', documentData);
          updateMarkerData(documentData);
        }
        if (change.type === 'removed') {
          console.log('Removed document:', documentData);
          removeMarkerData(documentData);
        }
      });
    });

    console.log('Server initialized successfully.');
  } catch (error) {
    console.error('Error initializing server:', error);
  }
}

function updateMarkerData(data) {
  markerData.push(data);
  writeToFile(filePath, `const markerData = ${JSON.stringify(markerData)};`);
}

function removeMarkerData(data) {
  markerData = markerData.filter((item) => item.id !== data.id);
  writeToFile(filePath, `const markerData = ${JSON.stringify(markerData)};`);
}

function writeToFile(filePath, data) {
  fs.writeFileSync(filePath, data);
  console.log('Data written to file successfully.');
}

// Call the initialization function
initializeServer();
