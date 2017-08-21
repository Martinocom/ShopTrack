var currentSelection = null;

$( document ).ready(function() {
    $(".panelLeft tbody tr").click(function () {
        if (currentSelection != null) {
            currentSelection.removeClass("trSelected");
        }

        $(this).addClass("trSelected");
        currentSelection = $(this);
    });
});