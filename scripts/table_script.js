var currentSelection = null;

$( document ).ready(function() {
    $(".master tbody tr").click(function () {
        if (currentSelection != null) {
            currentSelection.removeClass("trSelected");
        }

        $(this).addClass("trSelected");
        currentSelection = $(this);

        if (!isDetailsOpened) {
            //Opening details
            $('.details').css("display", "contents");
            $('.master').css("display", "none");

            isDetailsOpened = true;

            $('#buttonsMaster').css("display", "none");
            $('#buttonsDetails').css("display", "flex");

            $('#menuOpener').removeClass('fa-bars');
            $('#menuOpener').addClass('fa-arrow-left');
            $('#title').text("Dettagli");
        }
    });
});