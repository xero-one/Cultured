// $("#country-name").change(function () {
    $(".arrow").on("click", function () {
        var apiKey = "9a8f851c653056267377aaa5a4b7723d";
        var userQury = $("#country-name option:selected").val();
        console.log("user qr: ", userQury);
        $.ajax({
            url: "https://restcountries.eu/rest/v2/alpha/" + userQury,
            method: "GET"
        }).then(function (res) {
            console.log(res);
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + res.capital + "&units=imperial&appid=" + apiKey;
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                $(".temperature").append("<i>Current temperature (F): </i>", response.main.temp, "<br>");
                $(".temperature").append("<i>Current humidity: </i>", response.main.humidity,"<br>");
            });
        });
    });
// });
