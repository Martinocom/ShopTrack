$(document).ready(function () {
    var cookie = document.cookie.split(';');
    if(cookie[0] != ""){
        console.log(cookie[0]);
        /*var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        console.log(today);
        document.getElementById("OrderDate").value = dd + '/' + mm + '/' + yyyy;*/
    }else{
        window.open('index.html', '_self', false);
    }
});

class Payment {
    constructor(Ammount, Buyer, Date, IsOk, Payer, What) {
      this.Ammount = Ammount;
      this.Buyer = Buyer;
      this.Date = Date;
      this.IsOk = IsOk;
      this.Payer = Payer;
      this.What = What;
    }
};

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