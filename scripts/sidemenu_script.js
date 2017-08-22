/* Set the width of the side navigation to 250px */
var isOpened = false;
var isDetailsOpened = false;

function openNav() {
    if (!isDetailsOpened) {
        if (!isOpened) {
            document.getElementById("sideMenu").style.width = "100%";
            $('#menuOpener').removeClass('fa-bars');
            $('#menuOpener').addClass('fa-times');
            isOpened = true;
        } else {
            closeNav();
        }
    } else {
        //Opening details
        $('.details').css("display", "none");
        $('.master').css("display", "block");

        isDetailsOpened = false;

        $('#menuOpener').removeClass('fa-arrow-left');
        $('#menuOpener').addClass('fa-bars');
        $('#title').text("Home");
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
    $('#menuOpener').removeClass('fa-times');
    $('#menuOpener').addClass('fa-bars');
    isOpened = false;
}