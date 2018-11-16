// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	(err, client) => {
		if (err) {
			return console.log('Unable to conenct to MongoDB Server');
		}
		const db = client.db('TodoApp');
		// db.collection('Todos')
		// 	.find({completed:true})
		// 	.toArray()
		// 	.then(
		// 		docs => {
		// 			console.log('Todos');
		// 			console.log(JSON.stringify(docs, undefined, 2));
		// 		},
		// 		err => {
		// 			console.log('Unable to find', err);
		// 		}
		// 	);

		db.collection('Todos')
			.find()
			.count()
			.then(
				count => {
					console.log('Todos Count',count);
				},
				err => {
					console.log('Unable to find', err);
				}
			);

		client.close();
	}
);
