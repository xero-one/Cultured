// $("#country-name").change(function () {
$(".arrow").on("click", function () {
    var usrCountry = $("#country-name option:selected").text();
    var userQury = $("#country-name option:selected").val();

    function yelpQueryURL(userLocation, capital) {
        console.log("location: ", capital + "," + userLocation);
        var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?`;
        var key =
            "DhUOw_5_G2RDrJSC6t0Y4rZzCx3INn7_0Y-A-LXSE6j4m7-9UEoSiyqEsJ5ATicLkHT40LansrK9dAW1tTlSHRsR2wV91Cc5MytlXNVR65R4bdlCS-Ekpk3vQ0OfXXYx";
        $.ajax({
            type: "GET",
            url: url,
            ali: "",
            link: "",
            headers: {
                Authorization: "Bearer " + key
            }
            ,
            data: {
                term: "restaurants",
                location: capital + "," + userLocation,
                // locale: userLocale,
                // latitude: usrLat,
                // longitude: usrLng, 
                // term: "food",
                limit: 5,
                radius: 40000 //this is in meters
            }
        }).then(function (response) {
            console.log(response);
            // Create img tag - <img>
            // Add src attribute to the img tag - <img src="" > 
            if (response.businesses.length) {
                for (var i = 0; i < 5; i++) {
                    var url = response.businesses[i].image_url;
                    var ali = response.businesses[i].name;
                    ali = ali.replace(/-/g, ' ');
                    var link = response.businesses[i].url;
                    var rating = response.businesses[i].rating;
                    var phone = response.businesses[i].phone;
                    // console.log(rating)
                    // console.log(url)
                    // console.log(ali)
                    // console.log(link)
                    // create the row
                    var trow = $('<tr>');
                    // add id attribute to the row
                    trow.attr('id', "rowItem-" + i);
                    var imageTag = $("<img>");
                    imageTag.attr("src", url);
                    imageTag.attr("style", "width: 50px; height; 40px");

                    trow.append(imageTag);
                    // create cell data
                    var tdata = $('<td>');
                    tdata.text(ali);

                    trow.append(tdata);
                    var rdara = $('<td>');
                    rdara.html('<a href="' + link + '" target = "_blank" >' + rating + '</a>');
                    trow.append(rdara);
                    var pdata = $('<td>');
                    pdata.text(phone);

                    trow.append(pdata);
                    $('#mytable').append(trow);
                }
            } else {
                $("#myTable").html("<p>Sorry, we could not retrieve restaurant infomation from Yelp API about this country<p>");
            }
        }).catch(function (error) {
            console.log(error)
        });
    }

    var allowedCoutries = ['Czech Republic', 'Denmark', 'Austria', 'Switzerland', 'Germany', 'Australia', 'Belgium', 'Canada', 'United Kingdom', 'Hong Kong',
        'Republic of Ireland', 'Malaysia', 'New Zealand', 'Philippines', 'Singapore', 'United States', 'Argentina', 'Chile', 'Spain', 'Mexico', 'Finland', 'France',
        'Italy', 'Japan', 'Norway', 'The Netherlands', 'Poland', 'Brazil', 'Portugal', 'Sweden', 'Turkey', 'Taiwan'];
    // ---------------------------------------------------------

    $.ajax({
        url: "https://restcountries.eu/rest/v2/alpha/" + userQury,
        method: "GET"
    }).then(function (res) {
        if (allowedCoutries.indexOf(usrCountry) !== -1) {
            yelpQueryURL(usrCountry, (res.capital));
        }
        else {
            //display the svg about not in supported list
            console.log("hello, this is not supported");
        }
    });
});
// });
