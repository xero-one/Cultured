$(".arrow").on("click", function () {
    var countryCode = $("#country-name option:selected").attr("data-iso2");
    console.log("usr iso2: ", countryCode);
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=trending&country=" + countryCode + "&media=music&limit=5", //,https://itunes.apple.com/search?term=jack+johnson&limit=25
        method: "GET"
    }).then(function (res) {
        console.log("look here for apple");
        console.log("https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=trending&country=" + countryCode + "&media=music&limit=5");
        console.log(JSON.parse(res));
        var resObj = JSON.parse(res)
        if (resObj.resultCount > 0) {
            for (var i = 0; i < 5; i++) {
                var artist = resObj.results[i].artistName;
                var song = resObj.results[i].collectionCensoredName;
                var art = resObj.results[i].artworkUrl100;
                var link = resObj.results[i].previewUrl;

                var trow = $('<tr>');
                // trow.attr('id', "rowItem-" + i);
                var imageTag = $("<img>");
                imageTag.attr("src", art);
                imageTag.attr("style", "width: 50px; height; 40px");
                trow.append(imageTag);

                var tdata = $('<td>');
                tdata.text(artist);

                trow.append(tdata);
                var rdata = $('<td>');
                rdata.html('<a href="' + link + '" target = "_blank" >' + song + '</a>');
                trow.append(rdata);
                $('#music-table').append(trow);

            }
        }
        else {
            $("#music-table").html("Sorry, we could not find any trending music for this country.");
        }
    });
});
