$(document).ready(function(){
    var t = setInterval(function(){
        $("#slider ul").animate({marginLeft:-400},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
});