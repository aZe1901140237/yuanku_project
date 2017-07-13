
var w = window.screen.availWidth;
var h = window.screen.availHeight;
var shift_width =   $(".nav").css("width");
var off = true;
var that_bg = 1;
var timer = null;
var arr_shift = [];
var arr_nav = [" ","left","top","right","bottom"];
arr_shift[1]=["50%","30%"];
arr_shift[2]=["23%","44%"];
arr_shift[3]=["70%","3%"];
arr_shift[4]=["10%","66%"];
/*初始化*/
$(".logo img").css("top","5%");
$(".pull img").css("bottom","0");
$(".background").css("height",h+"px");
$(".nav").css("height",shift_width);
setTimeout(function () {
    $(".top").css("width","50%");
    $(".bottom").css("width","30%");
},7000);
for(var i=0;i<6;i++)
    $("#bg"+i).css("left",w*(i-1))
/*左右点击*/
$("#click_shift1").click(function () {
    if(off){
        off=false;
        for(var i=1;i<5;i++){
            if(that_bg==i)
            {
                    $(".top").css("width",arr_shift[i][0]);
                    $(".bottom").css("width",arr_shift[i][1]);
            }
        }
        var terget =parseInt($(".background_img").css("left"))+w;
        clearInterval(timer);
        var timer=setInterval(function () {
            var speed = (terget-parseInt($(".background_img").css("left")))/10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            $(".background_img").css("left",parseInt($(".background_img").css("left"))+speed+"px");
            if(speed==0){
                off=true;
                $("#click_shift2").disable=false;
                that_bg--;
                clearInterval(timer);
                if(that_bg==0){
                    $(".background_img").css("left",-3*w+"px");
                    that_bg=4;
                }
                console.log(that_bg);
            }
        },30)
    }
});
$("#click_shift2").click(function () {
    if(off){
        off=false;
        for(var i=1;i<5;i++){
            if(that_bg==i)
            {
                $(".top").css("width",arr_shift[i][0]);
                $(".bottom").css("width",arr_shift[i][1]);
            }
        }
        var terget = parseInt($(".background_img").css("left")) - w;
        clearInterval(timer);
        var timer = setInterval(function () {
            var speed = (terget - parseInt($(".background_img").css("left"))) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            $(".background_img").css("left", parseInt($(".background_img").css("left")) + speed + "px");
            if (speed == 0) {
                off=true;
                $("#click_shift2").disable = false;
                clearInterval(timer);
                that_bg++;
                if (that_bg == 5) {
                    $(".background_img").css("left", "0px");
                    that_bg = 1;
                }
                console.log(that_bg);
            }
        }, 30)
    }
});
/*四个按钮点击*/
for(var i=1;i<5;i++){
    $("#nav_"+arr_nav[i]).click(function () {
        console.log($(this));
    });
}
$(".pull img").click(function () {
    window.location.href="interior.html"
});
