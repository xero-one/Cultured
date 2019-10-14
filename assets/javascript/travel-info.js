$("#country-name").change(function () {
	$(".arrow").on("click", function () {
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",
			"method": "POST",
			"headers": {
				"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
				"x-rapidapi-key": "ca19099bfcmsh615bdce1e8c4363p106326jsnb39223cf3f91",
				"content-type": "application/x-www-form-urlencoded"
			},
			"data": {
				"inboundDate": "2019-09-10",
				"cabinClass": "business",
				"children": "0",
				"infants": "0",
				"country": "",
				"currency": "",
				"locale": "en-US",
				"originPlace": "SFO-sky",
				"destinationPlace": "LHR-sky",
				"outboundDate": "2019-09-01",
				"adults": "1"
			}
		};

		$.ajax(settings).then(function (response) {
			console.log(response);
		});

		var userQury = $("#country-name option:selected").val();

		$.ajax({
			url: "https://restcountries.eu/rest/v2/alpha/" + userQury,
			method: "GET"
		}).then(function (res) {
			console.log(res);
			city = res.currencies[0].code;
		});
	});
});
