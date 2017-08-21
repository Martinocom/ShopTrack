/* Set the width of the side navigation to 250px */
var isOpened = false;

function openNav() {
    if (!isOpened){
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("sideMenu").style.width = "250px";
        $('#menuOpener').removeClass('fa-bars');
        $('#menuOpener').addClass('fa-times');
        isOpened = true;
    }
    else {        
        closeNav();
    }   
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
    document.body.style.backgroundColor = "white";
    $('#menuOpener').removeClass('fa-times');
    $('#menuOpener').addClass('fa-bars');
    isOpened = false;
} 
