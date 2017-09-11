
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
    checkLogin();
    
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

    document.getElementById('btnSignInS').disabled = true;
  }

//}


function LogOut(){
    firebase.auth().signOut();
    alert("Logout Effettuato");
    document.cookie = "";
    document.getElementById('btnLogOut').disabled = false;
    windows.open('index.html','_self',false);
}

function WriteData(){
  var cookie = document.cookie.split(';');
  if(cookie[0] != ""){
    firebase.database().ref('users/' + cookie[0]).push({
      username: "LaDivisione",
      password: "prova1234"
    }).catch(function(error){
      alert(error.message);
    });
  }
}

function WriteDataAddOrders(){
  var cookie = document.cookie.split(';');
  if(cookie[0] != ""){
      if(document.getElementById("StoreSelect").value != null){
          firebase.database().ref('users/' + cookie[0] + '/orders/').push({
              Date: document.getElementById("OrderDate").value,
              DatePrev: document.getElementById("ExpectedArrival").value,
              ID: "0",
              Store: document.getElementById("StoreSelect").value
          }).catch(function(error){
              alert(error.message);
          });
      }else{
          alert("Devi selezionare uno store");
      }
  }
}


function WriteDataAddItems(){
  
      var cookie = document.cookie.split(';');
      var idOrdine = document.getElementById("OrderID").value;
      var idItem = document.getElementById("ItemID").value;

      if(cookie[0] != ""){
        firebase.database().ref('users/' + cookie[0] + '/orders/' + idOrdine + '/Items/' +idItem ).set({
            //PARAMETRI Items 
            Details: document.getElementById("Details").value,
            ID: idItem,
            Name: document.getElementById("ItemName").value,
            Quantity: document.getElementById("Quantity").value,
            SinglePrice: document.getElementById("Price").value,
            Status: "0"
            
        }).catch(function(error){
            alert(error.message);
        });
  
        firebase.database().ref('users/' + cookie[0] + '/orders/' + idOrdine + '/Items/' +idItem + '/Payment/').set({
          //PARAMETRI DEl Payment 
            Ammount: document.getElementById("Quantity").value * document.getElementById("Price").value,
            Buyer: document.getElementById("Buyer").value,
            Date: document.getElementById("OrderDate").value,
            IsOk: false,
            Payer: document.getElementById("Payer").value,
            What: document.getElementById("ItemName").value
          
        }).catch(function(error){
            alert(error.message);
        });
      }
    }