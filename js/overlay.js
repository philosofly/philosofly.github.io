var DestroyOverlay = function () {
    $('#overlay').fadeOut("fast");
}

var FadeInOverlay = function () {
    $('#overlay').fadeIn("slow");
}

$(document).ready(function() {
    if ($('#overlay').length > 0) {
        FadeInOverlay();

        $(".overlay-close-btn").click(DestroyOverlay);
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                DestroyOverlay();
            }
        });
    }
});
