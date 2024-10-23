// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN0nPeXxaZo4xHVPM6T0q4O_1cayGQqts",
    authDomain: "fir-vue-example-5d55f.firebaseapp.com",
    projectId: "fir-vue-example-5d55f",
    storageBucket: "fir-vue-example-5d55f.appspot.com",
    messagingSenderId: "147573327856",
    appId: "1:147573327856:web:108142dbe96fbc31527f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;