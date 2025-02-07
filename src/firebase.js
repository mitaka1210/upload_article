// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: 'AIzaSyDqqUN73nUoj1jO9dZ0gA3G4nr6FOk8t-w',
 authDomain: 'createarticle-1be4e.firebaseapp.com',
 projectId: 'createarticle-1be4e',
 storageBucket: 'createarticle-1be4e.firebasestorage.app',
 messagingSenderId: '304208490624',
 appId: '1:304208490624:web:ae07baa1d094ed41baf665',
 measurementId: 'G-5RBYM5JN1H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = () => {
 signInWithPopup(auth, googleProvider)
  .then((result) => {
   // This gives you a Google Access Token. You can use it to access the Google API.
   const credential = GoogleAuthProvider.credentialFromResult(result);
   const token = credential.accessToken;
   // The signed-in user info.
   const user = result.user;
   // IdP data available using getAdditionalUserInfo(result)
   // ...
   localStorage.setItem('googleToken', JSON.stringify(credential.accessToken));
   if (credential.accessToken !== null) {
    window.location.href = '/home';
   }
  })
  .catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.customData.email;
   // The AuthCredential type that was used.
   const credential = GoogleAuthProvider.credentialFromError(error);
  });
};
const signInWithFacebook = () => signInWithRedirect(auth, facebookProvider);
const logout = () => signOut(auth);

export { auth, signInWithGoogle, signInWithFacebook, logout };
