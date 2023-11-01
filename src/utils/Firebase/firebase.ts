import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABAuWNrUrhRdDX0HKxkKYPTv9k_b0tHDo",
  authDomain: "cac-2023-a9172.firebaseapp.com",
  projectId: "cac-2023-a9172",
  storageBucket: "cac-2023-a9172.appspot.com",
  messagingSenderId: "161911286062",
  appId: "1:161911286062:web:20736b5243145f937ab2bf",
  measurementId: "G-VPCC735PW8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

async function handleAuthClick(){
  const fbu = (await signInWithPopup(auth, provider)).user;
  
  return fbu;
}

async function handleSignOutClick(){
  return auth.signOut();
}

export default app;

export {
  handleAuthClick,
  handleSignOutClick,
  auth,
}
