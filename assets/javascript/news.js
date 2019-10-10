var userQuery = "china";//$("#country-name").val();

$.ajax({
    url: "https://newsapi.org/v2/top-headlines?q="+userQuery+"&apiKey=fb3a00f195804d52a07c98c270c813ad&pageSize=5",
    method: "GET"
}).then(function(res){
    console.log(res);
    var articles = res.articles;
    for(var i = 0; i < articles.length; i++){
        $("#news").append(articles[i].title,"<br>");
        $("#news").append(articles[i].url,"<br>");
        console.log(articles[i].title);
        console.log(articles[i].url);
    }
});

