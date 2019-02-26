$(document).ready(function(){
    var w= $(window).width();
    console.log(w)

    $(window).scroll(function() {
        var hT = $('#partition-about').offset().top,
            hH = $('#partition-about').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > hT){
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
        if (wS > hT){
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
        if (wS > hT){
            $('.partition-work').animate({height:'96px'}, 500);
            $('.partition-work p span').css("font-size", "72px");
            $('.partition-work p').css("font-size", "12px");
        }
    });

    $('.photo-area').hide();

    for (i=1; i<10; i++) {
        $(".carousel-inner").append('<div class="item"><img src="ux'+i+'.jpg" alt="Chicago" style="width:50%;"></div>');
        console.log(i)
    }

    $("#ux-image").click(function() {
        $(".work-item").hide();
        $(".photo-area").show();
    });
});