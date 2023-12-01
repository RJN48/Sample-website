// Your Firebase configuration details
const firebaseConfig = {
    apiKey: "AIzaSyA4o_hWIw_Er8L17bbH73gEzfL1dhpfQmw",
    authDomain: "website-5cf4d.firebaseapp.com",
    databaseURL: "https://website-5cf4d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "website-5cf4d",
    storageBucket: "website-5cf4d.appspot.com",
    messagingSenderId: "753042559546",
    appId: "1:753042559546:web:e955a2a7f9afb256e59b03"
  };
  
  // Initialize Firebase app
  firebase.initializeApp(firebaseConfig);
  
  // Get references to Firebase authentication and database
  const auth = firebase.auth();
  const database = firebase.database();
  
  // Add event listener for the sign-up button
  document.getElementById('signUp').addEventListener('click', function (e) {
      e.preventDefault();
  
      // Get form input values for sign-up
      var email = document.getElementById('signupEmail').value;
      var password = document.getElementById('signupPassword').value;
      var username = document.getElementById('signupFirstname').value + " " + document.getElementById('signupLastname').value;
  
      // Firebase sign-up logic using createUserWithEmailAndPassword
      auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              const user = userCredential.user;
  
              // Set user data in the database (This is just an example, adjust as per your database structure)
              database.ref('users/' + user.uid).set({
                  username: username,
                  email: email
                  // Add any other user data you want to store
              });
  
              alert('User created successfully!');
          })
          .catch((error) => {
              var errorMessage = error.message;
              alert(errorMessage);
          });
  });
  
  // Add event listener for the sign-in button
  document.getElementById('signIn').addEventListener('click', function (e) {
      e.preventDefault();
  
      // Get form input values for sign-in
      var signInEmail = document.getElementById('signInEmail').value;
      var signInPassword = document.getElementById('signInPassword').value;
  
      // Firebase sign-in logic using signInWithEmailAndPassword
      auth.signInWithEmailAndPassword(signInEmail, signInPassword)
          .then((userCredential) => {
              const user = userCredential.user;
              alert('Sign-in successful!');
              // Redirect or perform actions after successful sign-in
          })
          .catch((error) => {
              var errorMessage = error.message;
              alert(errorMessage);
          });
  });
  