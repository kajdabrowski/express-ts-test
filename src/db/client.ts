import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { setDoc, addDoc, getDoc } from "firebase/firestore";

console.log(process.env);

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    clientEmail: process.env.CLIENT_EMAIL,
  }),
});

const db = getFirestore();

export { db, setDoc, addDoc, getDoc };
