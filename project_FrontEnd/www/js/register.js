import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut }
    from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx1lBwfkQJy6MaNGg1u89ibAdjIzzCjXM",
    authDomain: "aloha-9955a.firebaseapp.com",
    databaseURL: "https://aloha-9955a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aloha-9955a",
    storageBucket: "aloha-9955a.appspot.com",
    messagingSenderId: "768666320587",
    appId: "1:768666320587:web:b6560491fd606f32cb654e",
    measurementId: "G-FSG0Q1PZYS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Commented out because it's not being used

const auth = getAuth();

document.getElementById("register-btn").addEventListener('click', function () {
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById("register-div").style.display = "none";
            alert("Register succesfully");
            window.location.href ="index.html" ;
        })
        .catch((error) => {
            document.getElementById("register-div").style.display = "none";
        });
});