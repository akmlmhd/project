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

document.getElementById("reg-btn").addEventListener('click', function () {
    document.getElementById("login-div").style.display = "none";
    window.location.href="register.html";
});

document.getElementById("login-btn").addEventListener('click', function () {
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById("login-div").style.display = "none";
            window.location.href="home.html";
        })
        .catch((error) => {
            document.getElementById("login-div").style.display = "none";
            alert("wrong password!!");
            window.location.href="index.html";
        });
});