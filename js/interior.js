var w = window.screen.availWidth;
console.log(w);
$(".bg_floor").css("width",w+"px");
var wow =new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();
$(".p_bg p").addClass("animated bounceInUp");
$("")