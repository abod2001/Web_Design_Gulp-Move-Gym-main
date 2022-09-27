$(window) .scroll(function(){
    if($(window).scrollTop()>150){
        $(".header").addClass("fixed")
    }
    else{
        $(".header").removeClass("fixed");
    }
    if($(window).scrollTop()>80){
        $(".header").addClass("fixe")
    }
    else{
        $(".header").removeClass("fixe");
    }


})
$(".nav-btn").click(function(){
    $(".navba").toggleClass("nav")

})
$(".move-left").addClass("ml180")
