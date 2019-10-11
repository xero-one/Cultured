var userQury = "fra"; //$("#country-name").val();

$.ajax({
    url: "https://restcountries.eu/rest/v2/alpha/" + userQury,
    method: "GET"
}).then(function(res){
    console.log(res);
    var img = $("<img>");
    img.attr("src",res.flag);
    img.attr("style", "width: 80px; height: 30px;");
    $(".countries").append(img,"<br>");
    $(".countries").append("<i>Capital of the country: </i><strong>" + res.capital,"</strong><br>");
    $(".countries").append("<i>Currency used: </i><strong>" + res.currencies[0].code,"</strong><br>");
    $(".countries").append("<i>Language spoken: </i><strong>" + res.languages[0].name,"</strong><br>");
    $(".countries").append("<i>Current population: </i><strong>" + (res.population).toLocaleString(),"</strong><br>");
    $(".countries").append("<i>Country timezone: </i><strong>" + res.timezones[0],"</strong><br>");
});
