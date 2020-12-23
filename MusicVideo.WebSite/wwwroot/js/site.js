// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 10);
    var goUp = false;
    function frame() {

        if (pos == 0) goUp = false;
        else if (pos == 200) goUp = true;

        if (goUp) {
            pos--;
            elem.style.top = pos + "px";
            elem.style.bottom = pos + "px";
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.bottom = pos + "px";
        }
    }
}

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
    myMove();
});