$(document).ready(function () {
    // $('select').formSelect();
});
var queryURL = "https://api.exchangerate-api.com/v4/latest/USD"
var rates;
var stuff = [{
    "currency": "AED",
    "description": "UAE Dirham",
    "country": "United Arab Emirates"
},
{
    "currency": "ARS",
    "description": "Argentine Peso",
    "country": "Argentina"
},
{
    "currency": "AUD",
    "description": "Australian Dollar",
    "country": "Australia"
},
{
    "currency": "BGN",
    "description": "Bulgarian Lev",
    "country": "Bulgaria"
},
{
    "currency": "BRL",
    "description": "Brazilian Real",
    "country": "Brazil"
},
{
    "currency": "BSD",
    "description": "Bahamian Dollar",
    "country": "Bahamas"
},
{
    "currency": "CAD",
    "description": "Canadian Dollar",
    "country": "Canada"
},
{
    "currency": "CHF",
    "description": "Swiss Franc",
    "country": "Switzerland"
},
{
    "currency": "CLP",
    "description": "Chilean Peso",
    "country": "Chile"
},
{
    "currency": "CNY",
    "description": "Chinese Renminbi",
    "country": "China"
},
{
    "currency": "COP",
    "description": "Colombian Peso",
    "country": "Colombia"
},
{
    "currency": "CZK",
    "description": "Czech Koruna",
    "country": "Czech Republic"
},
{
    "currency": "DKK",
    "description": "Danish Krone",
    "country": "Denmark"
},
{
    "currency": "DOP",
    "description": "Dominican Peso",
    "country": "Dominican Republic"
},
{
    "currency": "EGP",
    "description": "Egyptian Pound",
    "country": "Egypt"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Germany"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Austria"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Belgium"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Cyprus"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Estonia"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Finland"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "France"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Greece"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Ireland"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Italy"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Latvia"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Lithuania"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Luxembourg"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Malta"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Netherlands"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Portugal"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Slovakia"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Slovenia"
},
{
    "currency": "EUR",
    "description": "Euro",
    "country": "Spain"
},
{
    "currency": "FJD",
    "description": "Fiji Dollar",
    "country": "Fiji"
},
{
    "currency": "GBP",
    "description": "Pound Sterling",
    "country": "United Kingdom"
},
{
    "currency": "GTQ",
    "description": "Guatemalan Quetzal",
    "country": "Guatemala"
},
{
    "currency": "HKD",
    "description": "Hong Kong Dollar",
    "country": "Hong Kong"
},
{
    "currency": "HRK",
    "description": "Croatian Kuna",
    "country": "Croatian"
},
{
    "currency": "HUF",
    "description": "Hungarian Forint",
    "country": "Hungary"
},
{
    "currency": "IDR",
    "description": "Indonesian Rupiah",
    "country": "Indonesia"
},
{
    "currency": "ILS",
    "description": "Israeli Shekel",
    "country": "Israel"
},
{
    "currency": "INR",
    "description": "Indian Rupee",
    "country": "India"
},
{
    "currency": "ISK",
    "description": "Icelandic Krona",
    "country": "Iceland"
},
{
    "currency": "JPY",
    "description": "Japanese Yen",
    "country": "Japan"
},
{
    "currency": "KRW",
    "description": "South Korean Won",
    "country": "Korea"
},
{
    "currency": "KZT",
    "description": "Kazakhstani Tenge",
    "country": "Kazakhstan"
},
{
    "currency": "MXN",
    "description": "Mexican Peso",
    "country": "Mexico"
},
{
    "currency": "MYR",
    "description": "Malaysian Ringgit",
    "country": "Malaysia"
},
{
    "currency": "NOK",
    "description": "Norwegian Krone",
    "country": "Norway"
},
{
    "currency": "NZD",
    "description": "New Zealand Dollar",
    "country": "New Zealand"
},
{
    "currency": "PAB",
    "description": "Panamanian Balboa",
    "country": "Panama"
},
{
    "currency": "PEN",
    "description": "Peruvian Nuevo Sol",
    "country": "Peru"
},
{
    "currency": "PHP",
    "description": "Philippine Peso",
    "country": "Philippines"
},
{
    "currency": "PKR",
    "description": "Pakistani Rupee",
    "country": "Pakistan"
},
{
    "currency": "PLN",
    "description": "Polish Zloty",
    "country": "Poland"
},
{
    "currency": "PYG",
    "description": "Paraguayan Guarani",
    "country": "Paraguay"
},
{
    "currency": "RON",
    "description": "Romanian Leu",
    "country": "Romania"
},
{
    "currency": "RUB",
    "description": "Russian Ruble",
    "country": "Russian Federation"
},
{
    "currency": "SAR",
    "description": "Saudi Riyal",
    "country": "Saudi Arabia"
},
{
    "currency": "SEK",
    "description": "Swedish Krona",
    "country": "Sweden"
},
{
    "currency": "SGD",
    "description": "Singapore Dollar",
    "country": "Singapore"
},
{
    "currency": "THB",
    "description": "Thai Baht",
    "country": "Thailand"
},
{
    "currency": "TRY",
    "description": "Turkish Lira",
    "country": "Turkey"
},
{
    "currency": "TWD",
    "description": "New Taiwan Dollar",
    "country": "Taiwan"
},
{
    "currency": "UAH",
    "description": "Ukrainian Hryvnia",
    "country": "Ukraine"
},
{
    "currency": "USD",
    "description": "US Dollar",
    "country": "United States"
},
{
    "currency": "UYU",
    "description": "Uruguayan Peso",
    "country": "Uruguay"
},
{
    "currency": "VND",
    "description": "Vietnamese Dong",
    "country": "Vietnam"
},
{
    "currency": "ZAR",
    "description": "South African Rand",
    "country": "South Africa"
}
];

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    rates = response.rates;
    console.log(rates);

})
for (let index = 0; index < stuff.length; index++) {
    const element = stuff[index];
    var dropdown = document.getElementById("dropDownList");
    var opt = document.createElement("option");
    opt.text = element.country;
    opt.value = element.currency;
    dropdown.options.add(opt);
}
function countrySelected() {
    var selection = document.getElementById("dropDownList").value;

    console.log(rates);
    console.log(rates[selection]);
    $("#countryMoney").text("Currency is valued at " + rates[selection] + " for every 1 US Dollar")
    //countrySelected()
    var myBoxA = document.getElementById('boxA').value; //user input of amount of dollars to convert
    var myBoxB = document.getElementById('boxB').value; //rates[selection]
    document.getElementById('boxB').defaultValue = rates[selection]; //rates[selection]
    console.log(myBoxB);
    myBoxB = rates[selection]
    console.log(myBoxB);
    var myBoxC = document.getElementById('boxC'); // results
    var myResult = myBoxA * rates[selection];
    console.log("thus is in the calc:" + rates[selection])
    document.getElementById('boxC').value = myResult;
}

