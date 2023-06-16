// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIUiXjeZZd1Su7jTrdCfGV4jUdAyWSxcw",
    authDomain: "js-tiger.firebaseapp.com",
    projectId: "js-tiger",
    storageBucket: "js-tiger.appspot.com",
    messagingSenderId: "769927805338",
    appId: "1:769927805338:web:96a70b1cfa1afd4b302223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();