import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAlpTC1BZXCoIYj_0N2Ep-FuAyNl5grFic",
    authDomain: "company-event-management.firebaseapp.com",
    databaseURL: "https://company-event-management-default-rtdb.firebaseio.com",
    projectId: "company-event-management",
    storageBucket: "company-event-management.appspot.com",
    messagingSenderId: "884208275786",
    appId: "1:884208275786:web:332ad460f8dc43945af1b3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage;

export default app;