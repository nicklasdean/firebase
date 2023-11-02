import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDoc, doc} from "firebase/firestore";

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

//Get collection reference
const cityCollection = collection(db, "cities");

//Reference a document by doc: database, collection, id
const documentReference = doc(db, "cities","SF");

//Fetch document with getDoc
