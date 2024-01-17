const admin = require('firebase-admin');
const serviceAccount = require('./firebase/jsom-c23a1-firebase-adminsdk-a4evw-b0a963f809.json');
const fs = require('fs');

const filePath = 'file.js'; 
let dataArray = [];
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const collectionRef = firestore.collection('/pid');

let markerData = []; // Initialize an empty array to store marker data

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
}, (error) => {
  console.error('Error in real-time listener:', error);
});

function updateMarkerData(data) {
  markerData.push(data);
  writeToFile('markerData.js', `const markerData = ${JSON.stringify(markerData)};`);
}

function removeMarkerData(data) {
  markerData = markerData.filter(item => item.id !== data.id);
  writeToFile('markerData.js', `const markerData = ${JSON.stringify(markerData)};`);
}

function writeToFile(filePath, data) {
  fs.writeFileSync(filePath, data);
  console.log('Data written to file successfully.');
}