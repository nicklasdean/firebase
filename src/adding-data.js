import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";
import {setDoc, doc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATrCghAMP31LFumsYhr-I3920KgtoJI8E",
    authDomain: "fir-web-84050.firebaseapp.com",
    projectId: "fir-web-84050",
    storageBucket: "fir-web-84050.appspot.com",
    messagingSenderId: "439128737122",
    appId: "1:439128737122:web:d5b490c386808a89a7183b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get firestore from firebase
const db = getFirestore(app);

// reference the collection
const citiesRef = collection(db, "cities");

//Add data: Name, state, country, capital, population, regions
await setDoc(doc(citiesRef, "CPH"), {});