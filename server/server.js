///LIST DEPENDENCIES
var express = require('express');
var Sequelize = require('sequelize');
var pg = require('pg');

////SET VARIABLES
var port = 8080;
var dbUrl = 'https://git.heroku.com/heroku-postgres-9da13075.git';


////CONNECT TO SERVER
var app = express();
app.listen(port, function () {
	console.log('HIPS HIPS HIPS' + port);
});


////CONNECT TO DB
// pg.defaults.ssl = true;

pg.connect(process.env.dbUrl, function (err, client, done) {
	console.log('done', done);
	if (err) {
		return console.error(err);
	} else {
		console.log('client', client);
	}
});