let map;

function initMap() {
	map = null;
}

$('#weather-form').submit(function(e){
	$("#weather-results").empty();

	e.preventDefault();

	var apiKey = '';
	var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
	var cityInputValue = $('#city-input').val().toLowerCase().split(" ").join("+");

	weatherApiUrl += cityInputValue;

	$.ajax({
		type: 'GET',
		url: weatherApiUrl,
		error: function(err){
			//logging the error to the console
			console.log(err)
		},
		success: function(response){
			//look at the google inspect on the console
			console.log(response);
			//getting the longitude and latitude of the city from the weather api
			var inputCityLongitude = response.coord.lon;
			var inputCityLatitude = response.coord.lat;

	  	var weather = $('<p>');
			weather.addClass("weather-p")
	  	weather.text("The weather in " + response.name + " is " + response.main.temp + " degress");
	  	$('#weather-results').append(weather);

			map = new google.maps.Map(document.getElementById("map"), {
				center: {lat: inputCityLatitude, lng: inputCityLongitude},
				zoom: 15
			});
		}
	});
});
