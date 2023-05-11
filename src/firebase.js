import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6ciL61UHbHZ5QSLmI2XdxH_zKILM-X4g",
    authDomain: "sid-todo-d6437.firebaseapp.com",
    projectId: "sid-todo-d6437",
    storageBucket: "sid-todo-d6437.appspot.com",
    messagingSenderId: "115474080759",
    appId: "1:115474080759:web:f2290645bba501a43cc4f2",
    measurementId: "G-F3GQW8KDNF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };