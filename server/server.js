///LIST DEPENDENCIES
var express = require('express');
var Sequelize = require('sequelize');
var pg = require('pg');

////SET VARIABLES
var port = 5050;

////CONNECT TO SERVER
var app = express();
app.listen(process.env.PORT || port, function () {
	console.log('HIPS HIPS HIPS ' + port);
});

app.use(express.static(__dirname + '/../android/'));
app.use(express.static(__dirname + '/../ios/'));
////////////////////////
////////ROUTING/////////
////////////////////////
var request = require('request');

request.post('http://s3-us-west-2.amazonaws.com/labitapp', {form:{key:'value'}}, function (error, response, body){
	if (!error && response.statusCode === 200) {
		console.log(body);
	//return our results to the client. 
	}
});
/*
when get req to /photos/all

our server will redirect to s3bucket and
return our results to the client. 
 http://s3-us-west-2.amazonaws.com/labitapp

 //authorization token? anonymous. 
*/
app.get('/photos/all', function (req, res) {
	$aja
})


// module.exports = {
// 	dbUrl: dbUrl,
// };