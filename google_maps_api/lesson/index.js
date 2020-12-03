/*
	https://developers.google.com/maps/documentation/javascript/examples

	Steps:
		1. Enable Google Maps api
		2. Set up google billing account

	Docs:
		- https://support.google.com/googleapi/answer/6158841?hl=en
		- https://developers.google.com/maps/documentation/javascript/usage-and-billing

	Google account
		- google map metrics
		- billing

*/

/* This is the syntax to get a basic google map api to work. This is how they built it */
let map;

function initMap() {
	/*
		ran into an error where when you are using the google map api script
		it need to load right when the document loads,
		and the initMap function is expected from the javascript in order for the google map api to work
		so, im calling the google map api right when the page loads and setting the map to null
	*/
	map = null;
}

//Waiting a second for the google map api to load on the browser
setTimeout(function(){
	//syntax written by google to set up your page with a map at certain coordinates
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 40.8116, lng: -73.9465},
		zoom: 12,
	});
},1000);
