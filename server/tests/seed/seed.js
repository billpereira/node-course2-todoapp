const { ObjectID } = require('mongodb');
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
	{
		_id: userOneId,
		email: 'william@me.com',
		password: 'userPass',
		tokens: [
			{
				access: 'auth',
				token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
			}
		]
	},
	{
		_id: userTwoId,
		email: 'jen@me.com',
		password: 'userPass2'
	}
];

const populateUsers = done => {
	User.deleteMany({})
		.then(() => {
			var userOne = new User(users[0]).save();
			var userTwo = new User(users[1]).save();
			// User.insertMany(todos);

			return Promise.all([userOne, userTwo]);
		})
		.then(() => done());
};
const todos = [
	{
		_id: new ObjectID(),
		text: 'First test todo'
	},
	{
		_id: new ObjectID(),
		text: 'Second test todo',
		completed: true,
		completedAt: 333
	}
];

const populateTodos = done => {
	Todo.deleteMany({})
		.then(() => {
			return Todo.insertMany(todos);
		})
		.then(() => done());
};

module.exports = {
	todos,
	populateTodos,
	users,
	populateUsers
};
