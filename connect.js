// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA85-T_kmkbwp01pPFgc14Ky7e95cAZLxo",
    authDomain: "loginandauth-d4d3e.firebaseapp.com",
    projectId: "loginandauth-d4d3e",
    storageBucket: "loginandauth-d4d3e.appspot.com",
    messagingSenderId: "366957379069",
    appId: "1:366957379069:web:2331f190559a8287d4ed94",
    measurementId: "G-TC05MN9T6F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth=firebase.auth();

  function signUp(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    const promsie=auth.createUserWithEmailAndPassword(email, password);
    promsie.catch(e=>alert(e.message));
    alert("Signed Up");
   // window.open("next.html");
    }

  function signIn(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    const promsie=auth.signInWithEmailAndPassword(email, password);
    promsie.catch(e=>alert(e.message));
    alert("Signed In  "+email);
    

  }

  // function sigOut(){

  //   auth.sigOut();
  //   alert("signed out");
  // }

  auth.onAuthStateChanged(function(user){
    if (user) {
      
      var email=user.email;
      window.open("temp3.html");
      
    } else {
      alert("No Active user")
    }
  });