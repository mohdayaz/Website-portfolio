$(document).ready(function(){
    var w= $(window).width();
    console.log(w)
});
$(window).scroll(function() {
    var hT = $('#partition-about').offset().top,
        hH = $('#partition-about').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH+500)){
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
if (wS > (hT+hH-wH+400)){
    $('.partition-skills').animate({height:'96px'}, 500);
    $('.partition-skills p span').css("font-size", "72px");
    $('.partition-skills p').css("font-size", "12px");
}
 });