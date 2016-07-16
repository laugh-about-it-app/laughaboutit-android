///LIST DEPENDENCIES
var express = require('express');
var Sequelize = require('sequelize');
var pg = require('pg');

////SET VARIABLES
var port = 5050;

////CONNECT TO SERVER
var app = express();
app.listen(port, function () {
	console.log('HIPS HIPS HIPS ' + port);
});




// module.exports = {
// 	dbUrl: dbUrl,
// };

