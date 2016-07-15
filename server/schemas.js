var db = require('./server.js')
var Sequelize = require('sequelize');


var sequelize = new Sequelize('postgres://qntzeozetttxxe:JDkRS8aTusHyPjDmp-YcWCK2qN@ec2-54-243-249-154.compute-1.amazonaws.com:5432/dfbtc6j4b2mtgi', {
	dialect: 'postgres',
	dialectOptions: {
		ssl: true
	}
});


////////////POSTGRES Tables///////////////////
//////////////sequelize???/////////////

// CREATE TABLE
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
			field: 'phoneNumber'
		},
		login : {
			type: Sequelize.STRING,
			field: 'login'
		},
		email: {
			type: Sequelize.STRING,
			field: 'email'
		}
	}, {
	freezeTableName: true
});

User.sync()
  .catch(function(err) {
  	console.error(err)
  })

User.create({firstName: 'bob', lastName: 'dylan', phoneNumber: 1, login: 'popo', email: 'love'}).then(function(user) {
	console.log('looooooliiiii', user.get({
		plain: true
	}))
})


module.exports = User;
