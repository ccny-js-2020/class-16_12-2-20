/*
	1. Search a pokemon using this api, https://pokeapi.co/api/v2/pokemon/ + searchQuery
	2. If the pokemon does not exist, alert the user that the pokemon doesnt exist
		- I did not go over handling error codes in class, so i will do my best to explain it here
		- if the pokemon is not in the api's database, it will return a 404 (not found) error code
	3. If the pokemon does exist:
		- display one or more attributes of the pokemon
		- display one random giphy of the pokemon using the giphy api
			This 1 pokemon image should be randomized from a response with multiple results
    - For the giphy api call, throw a forbidden error if the api key is invalid
*/
$('#search-button').on('click', function(){
	if($("#search-input").val() != ""){
		$("#image-div").empty();
		$("#search-results").empty();
		$("#loader-gif").show();
		$.ajax({
			type: 'GET',
			url: "https://pokeapi.co/api/v2/pokemon/" + $("#search-input").val().split(" ").join("+"),
			// statusCode: {
	    //     404: function() {
	    //       	alert("Please Enter Valid Pokemon Name");
	    //     }
	    // },
			error: function(err){
				$("#loader-gif").hide();
				if(err.status == 404){
					alert("Please Enter Valid Pokemon Name");
				} else {
					alert("Alert from the Pokemon API");
				}
			},
			success: function(res){
				$("#loader-gif").hide();
				console.log(res)
				var pokemonName = res.name;
				var pokemonType = res.types[0].type.name;
				$("#search-results").html("<p>Name: " + pokemonName + "</p><p>Type: " + pokemonType + "</p>");

				var apiKey = "dc6zaTOxFJmzC"
				$.ajax({
					type: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=" + pokemonName + "&api_key=" + apiKey + "&limit=10",
					error: function(err){
						if(err.status == 403){
							alert("Please Enter Valid API Key")
						} else {
							alert("Alert from the Giphy API");
						}
					},
					success: function(response){
						console.log(response)
						var randomIndex = Math.floor(Math.random() * response.data.length);

						var img = $("<img>", {
							src: response.data[randomIndex].images.fixed_height.url,
							class: "giphy-image"
						});

						$("#image-div").append(img)
					}
				});
			}
		});
	} else {
		alert("Please Enter Pokemon Name")
	}
});
