const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	(err, client) => {
		if (err) {
			return console.log('Unable to conenct to MongoDB Server');
		}
		const db = client.db('TodoApp');

		//deleteMany
		// db.collection('Todos')
		// 	.deleteMany({ text: '' })
		// 	.then(result => console.log(result));

		//deleteOne
		// db.collection('Todos')
		// 	.deleteOne({ text: '' })
		// 	.then(result => console.log(result));

		//findOneandDelete
		// db.collection('Todos')
		// 	.findOneAndDelete({ text: '' })
		// 	.then(result => console.log(result));

		client.close();
	}
);
