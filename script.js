$(document).ready(function(){
    var w= $(window).width();
    console.log(w)

    $(window).scroll(function() {
        var hT = $('#partition-about').offset().top,
            hH = $('#partition-about').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT-2)){
            $('.partition-about').animate({height:'96px'}, 500);
            $('.partition-about p span').css("font-size", "72px");
            $('.partition-about p').css("font-size", "12px");
        }
    });

    $(window).scroll(function() {
        var hT = $('#partition-skills').offset().top,
        hH = $('#partition-skills').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if (wS > (hT-2)){
            $('.partition-skills').animate({height:'96px'}, 500);
            $('.partition-skills p span').css("font-size", "72px");
            $('.partition-skills p').css("font-size", "12px");
        }
    });

    $(window).scroll(function() {
        var hT = $('#partition-work').offset().top,
        hH = $('#partition-work').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if (wS > (hT-2)){
            $('.partition-work').animate({height:'96px'}, 500);
            $('.partition-work p span').css("font-size", "72px");
            $('.partition-work p').css("font-size", "12px");
        }
    });

    $(window).scroll(function() {
        var hT = $('#partition-contact').offset().top,
        hH = $('#partition-contact').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if (wS > (hT-2)){
            $('.partition-contact').animate({height:'96px'}, 500);
            $('.partition-contact p span').css("font-size", "72px");
            $('.partition-contact p').css("font-size", "12px");
        }
    });

    $("#ux-image").click(function() {
        for (i=1; i<10; i++) {
            $(".carousel-inner").append('<div class="item"><img class="portfolio-images" src="ux'+i+'.jpg" alt="Chicago"></div>');
            console.log(i)
            $(".work-item").css('display', 'none');
            $(".photo-area").css('display', 'unset');
        }
    });
    
    $(".close").click(function(){
        $(".work-item").css('display', 'unset');
        $(".photo-area").css('display', 'none');
    });
});