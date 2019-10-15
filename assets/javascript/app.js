$(document).ready(function () {
    $(".page-2").hide();
    $(".arrow").on("click", function () {
        $(".page-2").show();
        $(".page-1").hide();
    });
    $('select').formSelect();
    $(".arrow").on("click", function () {
        $("#country_name").text($("#country-name option:selected").text());
    });
});