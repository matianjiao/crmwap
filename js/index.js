$(function () {
    //设置左侧栏的高
    $(".left-bg").height($(document).height());

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
        $(".left-bar").animate({marginLeft: "-18.333rem"}, 300);
        $(".left-bg").fadeOut(300);
    })
    //点击汉堡包 出现侧边栏
    $(".han").click(function () {
        $(".left-bar").animate({marginLeft: "0rem"}, 300);
        $(".left-bg").fadeIn(300);
    })


//    入金
    $(".banks").click(function () {
        $(".banks").removeClass("banks-click");
        $(this).addClass("banks-click");
    })


//    input选中状态
    $(".password-group input").focus(function () {
        $(".password-group input").removeClass("focus-current");
        $(".password-group .password").removeClass("focus-zi");
        $(this).addClass("focus-current");
        $(this).parent().find(".password").addClass("focus-zi");
    })


//    找回密码
    $(".email-phone-find").click(function () {
        var index = $(".email-phone-find").index($(this));
        $(".find-con").removeClass("find-con-dis");
        $(".find-con").eq(index).addClass("find-con-dis");
        $(".email-phone-find").removeClass("current-find");
        $(this).addClass("current-find");
    })

    $(".next-button").click(function () {
        $(".findpassword1").css({display: "none"});
        $(".reset").css({display: "block"});
    })

//搜索
    $(".search input").focus(function () {
        $(this).addClass("focus-zi");
        $(".search .search-icon").addClass("focus-zi");
        $(".search").addClass("search-current");
    })
    $(".search input").blur(function () {
        $(this).removeClass("focus-zi");
        $(".search .search-icon").removeClass("focus-zi");
        $(".search").removeClass("search-current");
    })

//    时间
    var mydate = new Date();
    $(".date input").attr("value", mydate.getFullYear() + " - " + mydate.getMonth() + " - " + mydate.getDate());


    //模拟树
    $(".hide-show").click(function () {
        console.log($(this).parents(".parent").attr("kai"))
        if ($(this).parent().parent().parent().parent().parent().attr("kai") == "true") {
            $(this).attr("src", "images/silde_03.png");
            // $(this).css({transform:"rotate(180deg)"})
            $(this).parent().parent().parent().parent().parent().children(".zi").css({display: "none"});
            $(this).parent().parent().parent().parent().parent().attr("kai", "false");
        } else {
            $(this).attr("src", "images/silde_06.png");
            $(this).parent().parent().parent().parent().parent().children(".zi").css({display: "block"});
            $(this).parent().parent().parent().parent().parent().attr("kai", "true");
        }
    })

//    代理申请记录
    $(".zhuangtai-click").click(function () {
        $(".zhuangtai-click").removeClass("current-active");
        $(this).addClass("current-active");
    })

//历史记录
    $(".his-click").click(function () {
        if ($(this).attr("hiskai") == "true") {
            $(this).attr("src", "images/silde_03.png");
            $(this).parent().parent().find(".his-zi").css({display: "none"});
            $(this).attr("hiskai","false");
        }else{
            $(this).attr("src", "images/silde_06.png");
            $(this).parent().parent().find(".his-zi").css({display: "block"});
            $(this).attr("hiskai","true");
        }
    })

})