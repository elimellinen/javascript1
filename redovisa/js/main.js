/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";



    console.log("All ready.");
}());

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction();};

// Get the header
var header = document.getElementById("site-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

//sticky if the navbar is at the top, otherwise fixed!
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
