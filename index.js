$(document).ready(function () {
    setupRotator();

});

function setupRotator() {
    if ($('.textItem').length > 0) {
        $('.textItem:first').fadeIn(1000);
        setInterval('textRotate()', 3000);
    }
}

function textRotate() {
    var current = $('#quotes>.current');
    if (current.next().length == 0) {
        current.removeClass('current').fadeOut(1000);
        $('.textItem:first').addClass('current').fadeIn(1000);
    } else {
        current.removeClass('current').fadeOut(1000);
        current.next().addClass('current').fadeIn(1000);
    }
}

/* sleepy overhead modal */

//    var idleTime = 0;
//
//    $(document).ready(function () {
//        var idleInterval = setInterval(timerIncrement, 200000);  //40s
//        $(this).mousemove(function (e) {
//            idleTime = 0;
//        });
//        $(this).keypress(function (e) {
//            idleTime = 0;
//        });
//        $(".sleepy-close, .sleepy-overlay, .sleepy-wake-up").click(function () {
//            $(".sleepy-overlay").hide();
//            idleTime = 0;
//        });
//        $('.sleepy-modal').click(function (event) {
//            event.stopPropagation();
//        });
//    });
//
//    function timerIncrement() {
//        idleTime = idleTime + 1;
//        if (idleTime > 1) {
//            $('.sleepy-overlay').fadeIn('slow');
//            idleTime = 0;
//        }
//
//    }