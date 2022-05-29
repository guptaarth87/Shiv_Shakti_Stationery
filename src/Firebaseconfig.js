// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD9pRuESvmsqD_ycKE2L_6-dd_auWT1DcA",
    authDomain: "shivshakti-e30c5.firebaseapp.com",
    projectId: "shivshakti-e30c5",
    storageBucket: "shivshakti-e30c5.appspot.com",
    messagingSenderId: "583749338943",
    appId: "1:583749338943:web:b4b1a7a5f0fc5135a6358a",
    measurementId: "G-9YK6VD7YC7"
  };


const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);