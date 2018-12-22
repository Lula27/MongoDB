// Creating connection to Mongodb using JavaScript 

var MongoClient = require('mongodb').MongoClient; 

// Set up url 
var url = 'mongodb://localhost:27017/learning_mongo'; 

// Connect to database 

MongoClient.connect(url, function(err, db) {
	console.log("Connected successfully to server"); 

	db.close(); 
}) 
