
var config = {
  apiKey: "AIzaSyD2Amywjsz8FWQ52tX6R-eJDbSXmt6bDvo",
  authDomain: "shoptrack-658c5.firebaseapp.com",
  databaseURL: "https://shoptrack-658c5.firebaseio.com",
  projectId: "shoptrack-658c5",
  storageBucket: "shoptrack-658c5.appspot.com",
  messagingSenderId: "123504057587"
  };

firebase.initializeApp(config);

//IMPLEMENTARE IL FORM DI SIGN UP
function SignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });

}

function SignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    //var email = document.getElementById('email').value;
    //var password = document.getElementById('password').value;

    var email = "prova@a.it";
    var password = "123456789ST";

    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('btnSignInS').disabled = false;
    });
    alert("Login Effettuato");
    
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log(user);
        console.log(user['uid']);
        window.open('mainTable.html', '_self', false);
        document.cookie = user['uid'];
      }
    });
  }
  document.getElementById('btnSignInS').disabled = true;
}

function LogOut(){
    firebase.auth().signOut();
    alert("Logout Effettuato");
    document.cookie = "";
    document.getElementById('btnLogOut').disabled = false;
}