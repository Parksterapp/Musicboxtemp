import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Add your Firebase project configuration here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
