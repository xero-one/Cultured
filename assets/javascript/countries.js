// $("#country-name").change(function () {
    $(".arrow").on("click", function () {
        var userQury = $("#country-name option:selected").val();

        $.ajax({
            url: "https://restcountries.eu/rest/v2/alpha/" + userQury,
            method: "GET"
        }).then(function (res) {
            // console.log(res);
            var img = $("<img>");
            img.attr("src", res.flag);
            img.attr("style", "width: 100px; height: 50px;");
            $(".main-country-pic").append(img, "<br>");
            $(".country-info").append("<i>Capital of the country: </i><strong>" + res.capital, "</strong><br>");
            $(".country-info").append("<i>Currency used: </i><strong>" + res.currencies[0].code, "</strong><br>");
            $(".country-info").append("<i>Language spoken: </i><strong>" + res.languages[0].name, "</strong><br>");
            $(".country-info").append("<i>Current population: </i><strong>" + (res.population).toLocaleString(), "</strong><br>");
            $(".country-info").append("<i>Country timezone: </i><strong>" + res.timezones[0], "</strong><br>");
        });
    });
// });