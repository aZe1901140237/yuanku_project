/**
 * Created by lzx on 2017/4/6.
 */
function scroll() {
    if(document.body.scrollTop)
    {
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }else
    {
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }

}

//改变屏幕宽度
function srceenWidth() {
    if(document.body.clientWidth || document.body.clientHeight){
        return{
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }

    }else {
        return{
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
}
//获取id
function $(id)
{
    return document.getElementById(id);

}
function show(id) {
    show(id).style.display="block"
}
function hide(id) {
    hide(id).style.display="none"
}

//完美封装
function animate(obj,json,fn)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var off=true;
        var current=0;
        for( var attr in json)   // attr  属性     json[attr]  值
        {
            //console.log(attr);
            if ("opacity" == attr) {
                current = json[attr]; //取值
                //console.log(current);
                // console.log("alpha(opacity= "+ (current + speed) + ")")
            }
            else {
                current = parseInt(getStyle(obj, attr)); // 数值

            }


            speed = (json[attr] - current) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


            if ("opacity" == attr) {
                if ("opacity" in obj.style)  //判断浏览器是否兼容
                {
                    //正常浏览器
                    obj.style.opacity = (current + speed ) / 100;
                }
                else {
                    obj.style.filter = "alpha(opacity= " + (current + speed) + ")";  //ie
                }
            }
            else if ("zIndex" == attr) {
                obj.style.zIndex = json[attr];
            }
            else {
                obj.style[attr] = current + speed + "px";
            }


            if (current != json[attr]) {
                off = false;
            }
            ;
        }



        if (off)
        {
            clearInterval(obj.timer);

            if (fn)
            {
                fn();
            }
        };


    },30);
};

function getStyle(odj,attr){
    if (odj.currentStyle)
    {
        //IE
        return odj.currentStyle[attr];
    }
    else
    {
        return window.getComputedStyle(odj,null)[attr];
    }
};


