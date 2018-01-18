// JavaScript Document

$(document).ready(function() {
    var playing = false;
 
    $('a#button').click(function() {
        $(this).toggleClass("down");
 
        if (playing == false) {
            document.getElementById('player').play();
            playing = true;
            $(this).text("Parar Sonido");
 
        } else {
            document.getElementById('player').pause();
            playing = false;
            $(this).text("Reiniciar Sonido");
        }
 
 
    });
});​