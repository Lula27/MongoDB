// Creating connection to Mongodb using JavaScript

var MongoClient = require('mongodb').MongoClient; 


// Set up url 
var url = 'mongodb://localhost:27017/learning_mongo'


var findDocuments = function(db, callback) {

	// create tours collection
	var collection = db.collection('tours'); 

	// create function to find entries in collection
	collection.find({"tourName": "Hot Salsa Tour"}).toArray(function(err, docs) {
		console.log(docs);
		callback; 
	})
}


// Connect to database 
MongoClient.connect(url, function(err, db) {
	console.log("Connected successfully to server");

	findDocuments(db, function() {

		db.close();
	})
	 
})