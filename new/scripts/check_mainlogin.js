$(document).ready(function () {
    checkLogin();
});

function checkLogin(){
    var cookie = document.cookie.split(';');
    if(cookie[0] != ""){
        window.open('mainTable.html', '_self', false);
    }
}