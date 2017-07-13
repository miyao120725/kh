/**
 * Created by 刘军 on 2016/12/24 0024.
 */
$(document).ready(function () {
    $('.CustomerInformation').load('CustomerInformation.html');
    $('.CallQuery').load('CallQuery.html');
    $('.WorkOrder').load('WorkOrder.html');
    $('.MsgTransmission').load('MsgTransmission.html');
    $('.knowledgeBase').load('knowledgeBase.html');
    $('.CallLoss').load('CallLoss.html');
    $('.ReturnTask').load('ReturnTask.html');
});
function Jump(Element,id){
    $(Element).click(function(event){
        event.preventDefault();
        var url = $(this).attr("href");
        $(id).load(url);
    });
}
function Title(id,title){
    $(id).text(title);
}
window.onload=function(){
    $(function(){
        $('.dowebok').dad({
            draggable: "h1",
        });
    });
   
    $("body").niceScroll({
        styler: "fb",
        cursorcolor: "#54c1b8",
        cursorwidth: '5',
        cursorborderradius: '10px',
        background: '#ffffff',
        spacebarenabled: false,
        cursorborder: '',
        zindex: '99999'
    });
    $(".nav-scroll li a").click(function(){
        var top = $($(this).attr("href")).offset().top;
        $('body,html').animate({scrollTop:top-100},800);
    });
    $(".nav-scroll li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    var drag = document.getElementsByClassName("navbar-rl")[0];
    var btn = document.getElementsByClassName("nav-btn")[0];
    var Nav = getComputedStyle(drag);
    btn.onmousedown = function (ev) {
        var oevent = ev || event;
        var distanceX = oevent.clientX - drag.offsetLeft;
        var distanceY = oevent.clientY - drag.offsetTop;
        document.onmousemove = function (ev) {
            var oevent = ev || event;
            drag.style.top = oevent.clientY - distanceY + 'px';
            drag.style.left = oevent.clientX - distanceX + 'px';
            (function(){
                var Obj = {
                    Y : oevent.clientY - distanceY,//top
                    X : oevent.clientX - distanceX,//left
                    R : oevent.clientX - distanceX + parseInt(Nav.width),//right
                    B : oevent.clientY - distanceY + parseInt(Nav.height),//botton
                    W : document.body.clientWidth,//width
                    H : document.body.clientHeight//height
                };
                if(Obj.Y <= 0)drag.style.top = 0 + 'px';
                if(Obj.X <= 0)drag.style.left = 0 + 'px';
                if(Obj.B >= Obj.H)drag.style.top = (Obj.H - parseInt(Nav.height)) + 'px';
                if(Obj.R >= Obj.W)drag.style.left = (Obj.W - parseInt(Nav.width)) + 'px';
            })();
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    btn.onmouseup = function () {
        if(drag.offsetLeft < $(document).width()/2){
            $(".nav-scroll").animate({height:0},500);
            setTimeout(function(){
                $(drag).animate({left:-180},500);
            },500);
            setTimeout(function(){$(".nav-ico-r").show();},1000);
        }else{
            $(".nav-scroll").animate({height:0},500);
            setTimeout(function(){
                $(drag).animate({left: $(document).width()},500);
            },500);
            setTimeout(function(){$(".nav-ico-l").show();},1000);
        }
    };
    var nav_hei = $(".nav-scroll>ul").height();
    $(".nav-ico-l").mouseover(function () {
        $(".navbar-rl").animate({left: $(document).width()-280},500);
        setTimeout(function(){
            $(".nav-scroll").animate({height:nav_hei},500);
        },500);
        $(this).hide();
    });
    $(".nav-ico-r").mouseover(function () {
        $(".navbar-rl").animate({left: 100},500);
        setTimeout(function(){
            $(".nav-scroll").animate({height:nav_hei},500);
        },500);
        $(this).hide();
    });
    function modal_left(){
        $("#ThreePartyCalls .modal-dialog").css("margin-left",($(".ThreePartyCalls_btn").offset().left)-($("#ThreePartyCalls .modal-dialog").width()/2-45));
        $("#Transfer .modal-dialog").css("margin-left",($(".Transfer_btn").offset().left)-($("#Transfer .modal-dialog").width()/2-45));
    };
    modal_left();
    $(window).resize(function(){
        modal_left();
    });
};
