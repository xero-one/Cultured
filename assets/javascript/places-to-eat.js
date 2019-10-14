/*$("#country-name").change(function () {
    $(".arrow").on("click", function () {
        var usrCountry = $("#country-name option:selected").text();

        function yelpQueryURL(userLocation) {
            console.log("location: ", userLocation);
            var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;
            var key =
                "DhUOw_5_G2RDrJSC6t0Y4rZzCx3INn7_0Y-A-LXSE6j4m7-9UEoSiyqEsJ5ATicLkHT40LansrK9dAW1tTlSHRsR2wV91Cc5MytlXNVR65R4bdlCS-Ekpk3vQ0OfXXYx";
            $.ajax({
                type: "GET",
                url: url,
                ali: "",
                link: "",
                headers: {
                    Authorization: "Bearer " + key
                },
                data: {
                    // term: "local restaurants",
                    // location: userLocation,
                    // locale: userLocale,
                    latitude: -24.66,
                    longitude: 25.91, //botswana, gaborone
                    term: "food",
                    limit: 5
                }
            })
                .then(function (response) {
                    console.log(response);
                    // Create img tag - <img>
                    // Add src attribute to the img tag - <img src="" > 
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
                        rdara.html(

                            '<a href="' + link + '" target = "_blank" >' + rating + '</a>');
                        trow.append(rdara);
                        var pdata = $('<td>');
                        pdata.text(phone);

                        trow.append(pdata);
                        $('#mytable').append(trow);
                        //   $(".places-to-eat").append();
                        // $("#image").append(imageTag);
                        // $('#rowItem-' + i).append(imageTag);∫
                        // $('#rowItem-' + i).append(tdata);
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        // ---------------------------------------------------------

        yelpQueryURL(usrCountry);
    });
});
*/