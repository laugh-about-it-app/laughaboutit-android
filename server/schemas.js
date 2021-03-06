var db = require('./server.js')
var Sequelize = require('sequelize');

///(why) do we need this? 
var sequelize = new Sequelize('postgres://qntzeozetttxxe:JDkRS8aTusHyPjDmp-YcWCK2qN@ec2-54-243-249-154.compute-1.amazonaws.com:5432/dfbtc6j4b2mtgi', {
	dialect: 'postgres',
	dialectOptions: {
		ssl: true
	}
});


////////////POSTGRES Tables/////////
///////////ORM sequelize////////////


////// USER
//NOTE: w sequelize, if you don't set id, it will use primary key - id as default. 
var User = sequelize.define('user', {
		first_name: {
			type: Sequelize.STRING,
			field: 'first_name'
		}, 
		last_name: {
			type: Sequelize.STRING,
			field: 'last_name'
		},
		login_or_password : {
			type: Sequelize.STRING,
			field: 'login'
		},
		email: {
			type: Sequelize.STRING,
			field: 'email'
		}
	}, {
		//set model tablename same as model name
	freezeTableName: true
});

//DEFINE USER RELATIONSHIPS 
User.hasMany(Caption);
///create/upate user table if does not already exists
User.sync()
  .catch(function(err) {
  	console.error(err)
  });

////// PHOTO
var Photo = sequelize.define('photo', {
	url: {
		type: Sequelize.STRING,
		field: 'url'
	},
	source: {
		type: Sequelize.STRING,
		field: 'source'
	}, 
	data: {
		type: Sequelize.STRING,
		field: 'data'
	}
});

//sync tabe w db if not exists
Photo.sync()
  .catch(function(err) {
  	console.error(err)
  });

//DEFINE PHOTO RELATIONSHIPS 
Photo.hasMany('caption');
Photo.hasMany('hashtag');
/////may want Photo to belong to user as an extension !!

////// CAPTION
var Caption = sequelize.define('caption', {
	likes: {
		type: Sequelize.INTEGER,
		field: 'url'
	},
	dislikes: {
		type: Sequelize.INTEGER,
		field: 'url'
	},
	caption_top: {
		type: Sequelize.STRING,
		field: 'source'
	}, 
	caption_bottom: {
		type: Sequelize.STRING,
		field: 'data'
	}
});

//sync tabe w db if not exists
Caption.sync()
  .catch(function(err) {
  	console.error(err)
  });

//DEFINE CAPTION RELATIONSHIPS 
Caption.belongsTo('user');
Caption.belongsTo('photo');


////// HASHTAG
var Hashtag = sequelize.define('hashtag', {
	hashtag: {
		type: Sequelize.STRING,
		field: 'hashtag'
	}
});

//sync tabe w db if not exists
Hashtag.sync()
  .catch(function(err) {
  	console.error(err)
  });

//DEFINE HASHTAG RELATIONSHIPS 

Hashtag.hasMany('photo');



///EXPORT THE DEFINITIONS FOR USER IN OTHER MODULES
//*the key point of including these tables in addition to 
//posicto-created Schema

module.exports = {
	User: User,
	Photo: Photo,
	Caption: Caption,
	Hashtag: Hashtag
};



/// TESTING
// User.create({firstName: 'bob', lastName: 'dylan', phoneNumber: 1, login: 'popo', email: 'love'}).then(function(user) {
// 	console.log('looooooliiiii', user.get({
// 		plain: true
// 	}))
// })
/*

Further Notes on Sequelize


On usr submission, we want to be able to add a variable version of this: (therefore, we neeed to have 
handles for our tables that we can reference w. insert and query strings in our js code)
E.g. case: adding a user-submitted caption/ photo


INSERT INTO "public"."photos_table"("url", "source") VALUES('https://s3-us-west-1.amazonaws.com/labitapp/dog1.jpeg', 'seed') 
RETURNING "id", "user_id", "url", "source", "topic_id", "data";
*/
/*

If adding foreign key as attribute: (second arg to hasMany/ belongsTo, etc.)
, {
	foreignKey: {
		name:'caption_id',
		allowNull: false	
	}
}
*/

// Photo.belongsTo(User, {
// 	foreignKey: {
// 		name:'user_id',
// 		allowNull: false	
// 	}
// })

//If not adding primary key by default, can do so explicitly:
//otherwise: /*    academy_id: {type: DataTypes.INTEGER,primaryKey: true},*/
