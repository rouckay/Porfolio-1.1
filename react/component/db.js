// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhig-uwgj74mqvMlBWWf5YXcSTC6TN2X4",
    authDomain: "webconnection-fe7fc.firebaseapp.com",
    projectId: "webconnection-fe7fc",
    storageBucket: "webconnection-fe7fc.appspot.com",
    messagingSenderId: "745015034259",
    appId: "1:745015034259:web:411205a877080429de2866",
    measurementId: "G-Q8S02XL1Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);