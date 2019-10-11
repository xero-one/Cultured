var userQury = "fra"; //$("#country-name").val();

$.ajax({
    url: "https://restcountries.eu/rest/v2/alpha/" + userQury,
    method: "GET"
}).then(function(res){
    console.log(res);
    $(".countries").append(res.flag,"<br>");
    $(".countries").append(res.capital,"<br>");
    $(".countries").append(res.currencies[0].code,"<br>");
    $(".countries").append(res.languages[0].name,"<br>");
    $(".countries").append(res.population,"<br>");
    $(".countries").append(res.timezones[0],"<br>");
});
