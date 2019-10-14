$(document).ready(function () {
    $(".page-2").hide();
    $(".arrow").on("click",function(){
        $(".page-2").show();
        $(".page-1").hide();
    });
    $('select').formSelect();

});