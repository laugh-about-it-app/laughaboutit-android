var db = require('./server.js')
var Sequalize = require('sequalize');


var sequelize = new Sequelize(db.dbUrl, {
	dialect:'postgres'
	// protocol:'postgres'
});


////////////POSTGRES Tables///////////////////
//////////////sequelize???/////////////


var User = sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING,
		field: 'firstName'
	}, 
	lastName: {
		type: Sequelize.STRING,
		field: 'lastName'
	},
	phoneNumber: {
		type: Sequelize.INTEGER,
		field: 'lastName'
	},
	login : {
		type: Sequelize.STRING,
		field: 'login'
	},
	email: {
		type: Sequelize.STRING,
		field: 'email'
	},
})