/*import firebase from 'firebase'
import 'firebase/firestore'

if(!firebase.apps.length){
    firebase.initializeApp({
        apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase*/


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebase = getFirestore(firebaseApp)
export default firebase
