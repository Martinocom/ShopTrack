var currentSelection = null;

$( document ).ready(function() {
    $(".panelLeft tbody tr").click(function () {
        if (currentSelection != null) {
            currentSelection.removeClass("trSelected");
        }

        $(this).addClass("trSelected");
        currentSelection = $(this);

        if (!isDetailsOpened) {
            //Opening details
            $('.details').css("display", "block");
            $('.master').css("display", "none");

            isDetailsOpened = true;

            $('#menuOpener').removeClass('fa-bars');
            $('#menuOpener').addClass('fa-arrow-left');
            $('#title').text("Dettagli");
        }
    });
});