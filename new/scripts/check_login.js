$(document).ready(function () {
    var cookie = document.cookie.split(';');
    if(cookie[0] != ""){
        console.log(user);
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

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }