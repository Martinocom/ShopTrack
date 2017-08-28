$(document).ready(function () {
    var cookie = document.cookie.split(';');
    if(cookie[0] != ""){
        console.log(cookie[0]);
    }else{
        window.open('index.html', '_self', false);
    }
});

function LogOut(){
    firebase.auth().signOut();
    alert("Logout Effettuato");
    document.cookie = "";
    window.open('index.html', '_self', false);
}