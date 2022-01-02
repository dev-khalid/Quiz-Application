// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAkVAKyV1jCMoarlMG4Z5d6GJ9baH-avns',
  authDomain: 'quiz-application-bec2f.firebaseapp.com',
  projectId: 'quiz-application-bec2f',
  storageBucket: 'quiz-application-bec2f.appspot.com',
  messagingSenderId: '1051430542340',
  appId: '1:1051430542340:web:8fca03f1d75bf6c27d2951',
  measurementId: 'G-Z6Z20QM6MP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


//sign up new user 
/**
 * 
 * import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 */


  //sign in existing user 
  /**
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
   */