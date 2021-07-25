import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDKnO_z481mckdO90POuEjfUovJ24azwYA",
    authDomain: "olx-clone-image-store.firebaseapp.com",
    databaseURL: "https://olx-clone-image-store-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "olx-clone-image-store",
    storageBucket: "olx-clone-image-store.appspot.com",
    messagingSenderId: "285774915620",
    appId: "1:285774915620:web:6eea34cb80b288661810b1",
    measurementId: "G-W76FTKJ178"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = firebase.auth();
export {
  auth, storage, firebase as default
}