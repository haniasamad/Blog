import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCgBJoJx5AmDw_b5Da89CJmvIHrrTcTIcM",
    authDomain: "sign-in-1dbbe.firebaseapp.com",
    projectId: "sign-in-1dbbe",
    storageBucket: "sign-in-1dbbe.firebasestorage.app",
    messagingSenderId: "1095089258443",
    appId: "1:1095089258443:web:15e41342218c9ada6cc04e"
};

const app = initializeApp(firebaseConfig);


window.signIn = () => {
console.log("Hello")

    var email = document.getElementById("Email").value
    var password = document.getElementById("password").value
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
console.log(user);

        })
        .catch((error) => {
            console.log(error);
            
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}