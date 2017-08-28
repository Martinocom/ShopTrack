$(document).ready(function () {
    var cookie = document.cookie.split(';');
    if(cookie[0] == null){
        window.open('index.html', '_self', false);
    }
});