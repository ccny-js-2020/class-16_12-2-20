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
