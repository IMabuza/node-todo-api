var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp/');

module.exports = {mongoose};