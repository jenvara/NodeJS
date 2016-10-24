//Problem: We need a simple way to look at a users badge count and JavaScript points
//solution: Use Node.js to connect to Treehousee's API to get profile information to pring out

var http = require("http");
var username = "chalkley";

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + "points in JavaScript";
		console.log(message);
}

//Connect to the API URL (http://teamtreehouse.com/username.json)

var request = http.get("http://teamtreehouse.com/" + username + ".json", function (response) {
	console.log(response.statusCode);

//Read the data

response.on('data', function (chunk) {
	console.log('BODY: ' + chunk);
});

//Parse the data (read data from string back to reader friendly format)
//Print the data
});

request.on("error", function(){
	console.error(error.message);

});