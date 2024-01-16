const admin = require('firebase-admin');
const serviceAccount = require('./firebase/jsom-c23a1-firebase-adminsdk-a4evw-b0a963f809.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const collectionRef = firestore.collection('/users');

collectionRef.onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log('New document:', change.doc.data());
    }
    if (change.type === 'modified') {
      console.log('Modified document:', change.doc.data());
    }
    if (change.type === 'removed') {
      console.log('Removed document:', change.doc.data());
    }
  });
}, (error) => {
  console.error('Error in real-time listener:', error);
});
