var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://node-user:qwe12qwe@ds139950.mlab.com:39950/node-todo-api');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.set('useFindAndModify', false);

module.exports = {
	mongoose
};