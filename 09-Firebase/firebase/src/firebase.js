// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPcsQQ9sm-IVGd1_ujefNJ77EWi_kTlaI",
  authDomain: "testing-d2d8d.firebaseapp.com",
  projectId: "testing-d2d8d",
  storageBucket: "testing-d2d8d.firebasestorage.app",
  messagingSenderId: "681355095034",
  appId: "1:681355095034:web:54fd2604e7df6ce93c9243",
  measurementId: "G-R5KXM0H2JV",
  databaseURL: "https://testing-d2d8d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default analytics