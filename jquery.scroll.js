$( document ).ready(function() {
    var div = $(".menu");
    var scroll = $(window).scrollTop();
        console.log(scroll)
    $(window).scroll(function() {    
        if (scroll >= 500) {
            div.removeClass('menu').addClass("darkmenu");
        } else {
            div.removeClass("darkmenu").addClass('menu');
        }
    });
});
