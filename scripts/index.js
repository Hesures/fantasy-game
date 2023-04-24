$(document).on("mousemove", function (event) {
    $("body").css("cursor", "none"); // para ocultar el cursor
    $("#mainCharacter").css("left", event.pageX) // asocia la clase #mainCharacter a la posición del cursor
                       .css("top", event.pageY);
});