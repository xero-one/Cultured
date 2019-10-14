// $("#country-name").change(function () {
    $(".arrow").on("click", function () {
        var userQuery = $("#country-name option:selected").text();
        //$('input[name="question"]:checked').val();
        // console.log("hello:", userQuery);
        // console.log("look here: https://newsapi.org/v2/top-headlines?q=" + userQuery + "&apiKey=fb3a00f195804d52a07c98c270c813ad&pageSize=5");
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?q=" + userQuery + "&apiKey=fb3a00f195804d52a07c98c270c813ad&pageSize=5",
            method: "GET"
        }).then(function (res) {
            // console.log(res);
            var articles = res.articles;
            if (articles.length > 0) {
                for (var i = 0; i < articles.length; i++) {
                    var news = $("<li>");

                    var link = $("<a>");
                    link.attr("href", articles[i].url);
                    link.attr("target", "_blank");
                    news.append(link);
                    link.text(articles[i].title);

                    // console.log(articles[i].title);
                    // console.log(articles[i].url);
                    news.append(link);
                    $(".country-news").append(news);
                }
            } else {
                $(".country-news").append("<p> There are no current news about this country</p>");
            }
        });
    });
// });