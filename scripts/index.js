/* ------------- FOLLOW ME ---------------- */

$(document).on("mousemove", function (event) {
    $("body").css("cursor", "none"); // para ocultar el cursor
    $("#mainCharacter").css("left", event.pageX+1) // asocia la clase #mainCharacter a la posición del cursor
                       .css("top", event.pageY);
});

/* ------------- PARCHMENTS ---------------- */

var parchment = $(".parchment");
var button = $(".parchmentButton");

parchment.hide();

$(".parchmentButton").on("click", () => {
    parchment.slideToggle("medium");
})



