// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDgufI7lcjvU4N03fWDSfC5xD31Kn4qY94",
  authDomain: "mywebapp-6d2f6.firebaseapp.com",
  projectId: "mywebapp-6d2f6",
  storageBucket: "mywebapp-6d2f6.appspot.com",
  messagingSenderId: "490224319782",
  appId: "1:490224319782:web:34ffb87f7d8f35fae355e7",
  measurementId: "G-7DX6LW5V4Z",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const Storage = getStorage(app)
