(function () {
    'use strict';

    //var myContent = document.getElementById('content');

    //myContent.innerHTML = "move!"

    var b = document.getElementsByClassName('b')[0];

    document.addEventListener('keydown', function(e) {
        var key = e.key;

        var l = b.offsetLeft;

        var t = b.offsetTop;

        var s = 10;

        switch (key) {
            case "ArrowUp":
                event.preventDefault();
                b.style.top = (t - s) + "px";
                break;
            case "ArrowLeft":
                event.preventDefault();
                b.style.left = (l - s) + "px";
                break;
            case "ArrowDown":
                event.preventDefault();
                b.style.top = (t + s) + "px";
                break;
            case "ArrowRight":
                event.preventDefault();
                b.style.left = (l + s) + "px";
                break;
        }
    });
    window.console.log('sandbox is ready');
})();
