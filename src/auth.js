import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

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

//Getting the auth module
const auth = getAuth();

//Fetching email & password
const email = document.querySelector("#id");
const password = document.querySelector("#password");
/*
createUserWithEmailAndPassword(auth, "nicklas@kea.dk", "alsidhsoubDAS")
    .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("My dear friend. It has come to my attention that your password does not need the validation criteria of google password services" +
            "I would therefore in a very friendly way suggest you to MAKE YOUR PASSWORD LONGER okay??")
    });
*/

console.log(auth.currentUser);

/*
await signInWithEmailAndPassword(auth, "nicklas@kea.dk", "alsidhsoubDAS")
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
*/
