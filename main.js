 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAh_D348FqKSFpw9O7KcjnPpoUmpZcXPMk",
   authDomain: "bohapp-b59ed.firebaseapp.com",
   databaseURL: "https://bohapp-b59ed-default-rtdb.firebaseio.com",
   projectId: "bohapp-b59ed",
   storageBucket: "bohapp-b59ed.appspot.com",
   messagingSenderId: "572482929302",
   appId: "1:572482929302:web:f8faff908a0990c5ce38b7",
   measurementId: "G-LX57M8MLSV"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


let signin = document.getElementById("signIn");

    // Get the input element by its ID
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("password");
    // Get the value from the input element
    let EmailValue = inputEmail.value;
    let PasswordValue = inputPassword.value;

    // Use the value in JavaScript

    // You can now use 'inputValue' in your JavaScript code.
  const getData = function(email, password){
  signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed in
    const user = userCredential.user;
    console.log(`User signed in: ${user.displayName}`);
  })
  .catch((error) => {
    // Handle errors
    console.error(error.message);
  });
}

  
  
  // Add a click event listener to the button
  signin.addEventListener("click", getData(EmailValue,PasswordValue));
