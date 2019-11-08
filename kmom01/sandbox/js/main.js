(function () {
    'use strict';

    var myContent = document.getElementById('content');

    myContent.innerHTML = '<h4>This is my sandbox! Here I test stuff.</h4>';

    window.console.log('Sandbox is ready!');
})();


(function () {
    'use strict';
    var content2 = document.getElementById('test');
    var today = new Date();

    content2.innerHTML = today;
    //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //var dateTime = date+' '+time;
}) ();
