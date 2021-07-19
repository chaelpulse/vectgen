$(document).ready(function(){

    $(document).scroll(function() {

        var y = $(this).scrollTop();
        //Scroll down 200 pixels to show navbar
        if (y > 50) {
        $('#navbar-main').addClass("navbar-scroll-bg");
        } else {
        $('#navbar-main').removeClass("navbar-scroll-bg");
        }

    });

});