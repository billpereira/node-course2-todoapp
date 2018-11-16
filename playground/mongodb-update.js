const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	(err, client) => {
		if (err) {
			return console.log('Unable to conenct to MongoDB Server');
		}
		//http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html#collection
		const db = client.db('TodoApp');

		//https://docs.mongodb.com/manual/reference/operator/update/
		db.collection('Todos')
			.findOneAndUpdate(
				{ _id: new ObjectID('') },
				{ $set: { text: '' } },
				{ returnOriginal: false }
			)
			.then(result => {
				console.log(result);
			});

		client.close();
	}
);
