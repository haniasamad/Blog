import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyDbnM6Pk7wZhaFlw0UUUdgkTvUlLagnOFw",
    authDomain: "sign-up-9a78f.firebaseapp.com",
    projectId: "sign-up-9a78f",
    storageBucket: "sign-up-9a78f.firebasestorage.app",
    messagingSenderId: "144112854599",
    appId: "1:144112854599:web:40734901967d43c69a3362"
  };

  const app = initializeApp(firebaseConfig);
  
//   const firebaseConfig = {
//   };
window.signUp = () => {
    console.log("Hello")
    
    var name = document.getElementById("name").value
    var user = document.getElementById("user").value
    var email = document.getElementById("email").value
    var number = document.getElementById("number").value
    var password = document.getElementById("password").value
    var confirm = document.getElementById("confirm").value
    
    const auth = getAuth(app);
    // createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         console.log(user);
        
//      const user = userCredential.user;
//   })

//   .catch((error) => {
//     console.log(error);
    
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//   } else {
//  }
// });
  }