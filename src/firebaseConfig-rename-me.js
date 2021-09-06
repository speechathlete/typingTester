import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
	apiKey: "",
	authDomain:"" ,
	projectId: "",
	storageBucket:"",
	messagingSenderId:"" ,
	appId: 
};
firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const signInWithGoogle = () => {
	auth.signInWithPopup(provider);
};

export default firebase;