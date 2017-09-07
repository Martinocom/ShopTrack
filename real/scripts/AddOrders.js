$(document).ready(function () {
    var cookie = document.cookie.split(';');
    if(cookie[0] != ""){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        console.log(today);
        document.getElementById("OrderDate").value = dd + '/' + mm + '/' + yyyy;
        mm = today.getMonth() + 3;
        document.getElementById("ExpectedArrival").value = dd + '/' + mm + '/' + yyyy;
    }else{
        window.open('index.html', '_self', false);
    }
});

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

function WriteDataAddOrders(){
    var cookie = document.cookie.split(';');
    if(cookie[0] != ""){
            alert("Entrato");
            firebase.database().ref('users/1').set({
              Date: "LaDivisione",
              DatePrev: "prova1234"
            }).catch(function(error){
              alert(error.message);
            });
          
        /*if(document.getElementById("StoreSelect").value != 0){
            firebase.database().ref('users/' + cookie[0]).set({
                Date: document.getElementById("OrderDate").value,
                DatePrev: document.getElementById("ExpectedArrival").value,
                ID: "7",
                Store: document.getElementById("StoreSelect").value
            }).catch(function(error){
                alert(error.message);
            });
        }else{
            alert("Devi selezionare uno store");
        }*/
    }
  }