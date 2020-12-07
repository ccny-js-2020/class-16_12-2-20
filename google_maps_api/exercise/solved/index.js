var trentonCoordinates = {lat: 40.2206, lng: -74.7597};
var albanyCoordinates = {lat: 42.6526, lng: -73.7562};
var lincolnCoordinates = {lat: 40.8136, lng: -96.7026};

var coordinates = {
	trenton: trentonCoordinates,
	albany: albanyCoordinates,
	lincoln: lincolnCoordinates
}

let map;

function initMap() {
	map = null;
}

setTimeout(function(){
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 40.8116, lng: -73.9465},
		zoom: 4,
	});
	for(var i in coordinates){
		new google.maps.Marker({
			position: coordinates[i],
			map,
			title: "Hello World!",
		});
	}
},1000);
