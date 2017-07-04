$(function () {
    //设置左侧栏的高
    // $(".left-bg").height($(document).height());

    //点击侧导航
    $(".click").click(function () {

        //判断当前点击
        if ($(this).attr("zhankai") == "false") {
            //其他回到初始
            $(".click").find(".zi").slideUp(200);
            $(".click").attr("zhankai", "false");
            $(".click").find("zi").removeClass("current");
            $(".click").removeClass("current");

            $(this).find(".zi").slideDown(400);
            $(this).attr("zhankai", "true");
            $(this).addClass("current");
            $(this).find("zi").addClass("current");
        } else {
            $(this).find(".zi").slideUp(200);
            $(this).attr("zhankai", "false");
            $(this).removeClass("current");
            $(this).find("zi").removeClass("current");
        }
    });

//    收缩侧导航
    $(".left-he").click(function () {
        $(".left-bar").animate({marginLeft:"-18.333rem"},300);
        $(".left-bg").fadeOut(300);
    })
    //点击汉堡包 出现侧边栏
    $(".han").click(function () {
        $(".left-bar").animate({marginLeft:"0rem"},300);
        $(".left-bg").fadeIn(300);
    })


})