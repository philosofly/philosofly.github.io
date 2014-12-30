var toggleMenu = function () {
    $("#mobile-menu").toggle("fast", toggleComplete);
}

var toggleComplete = function () {
    if ($("#mobile-menu:hidden").length != 0)
        $("#mobile-menu-btn").removeClass("active");
    else
        $("#mobile-menu-btn").addClass("active");
}

$(document).ready(function() {
    $("#mobile-menu-btn").click(toggleMenu);
});
