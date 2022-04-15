// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuiyoWKRw-XutjiCL_NLMuPxV5tW7v0Io",
    authDomain: "red-onion-restaurant-94bf7.firebaseapp.com",
    projectId: "red-onion-restaurant-94bf7",
    storageBucket: "red-onion-restaurant-94bf7.appspot.com",
    messagingSenderId: "7000563472",
    appId: "1:7000563472:web:2511cfabb7275295d60f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;