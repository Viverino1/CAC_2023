import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app";

import { CollectionReference, DocumentData, collection, doc, getDoc, setDoc, getFirestore, query, where, getDocs } from "firebase/firestore";

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

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}

const usersCol = createCollection<User>('users');

async function handleAuthClick(){
  const fbu = (await signInWithPopup(auth, provider)).user;
  const docRef = doc(usersCol, fbu.uid);
  const user: User = {
    email: fbu.email?? "",
    userName: fbu.displayName?? "",
    uid: fbu.uid,
    photoURL: fbu.photoURL?? "",
  }
  await setDoc(docRef, user, {merge: true});
  return user;
}

async function handleSignOutClick(){
  console.log("Logged Out");
  return auth.signOut();
}

async function getCurrentUser(){
  const uid = auth.currentUser?.uid;

  if(uid){
    const user = (await getDoc(doc(usersCol, uid))).data();
    console.log("%cCurrent User: ", 'color: green;', user);
    return user as User;
  }else{
    return undefined;
  }
}

export default app;

export {
  handleAuthClick,
  handleSignOutClick,
  auth,
  getCurrentUser,
}

export async function getTeamMembers(){
  const uid = auth.currentUser?.uid;
  if(!uid) return;
  const docs = await getDocs(collection(usersCol, uid, "teamMembers"));
  const teamMembers: TeamMember[] = [];
  docs.forEach(doc => {
    teamMembers.push(doc.data() as TeamMember);
  });
  console.log(teamMembers);
  return teamMembers;
}

export async function getProducts(){
  const uid = auth.currentUser?.uid;
  if(!uid) return;
  const docs = await getDocs(collection(usersCol, uid, "products"));
  const products: Product[] = [];
  docs.forEach(doc => {
    products.push(doc.data() as Product);
  })
  console.log(products);
  return products
}