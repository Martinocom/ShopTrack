/* Set the width of the side navigation to 250px */
var isOpened = false;

function openNav() {
    if (!isOpened){
        document.getElementById("sideMenu").style.width = "100%";
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
    $('#menuOpener').removeClass('fa-times');
    $('#menuOpener').addClass('fa-bars');
    isOpened = false;
} 
