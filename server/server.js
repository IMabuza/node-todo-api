var mongoose = require('mongoose');

mongoose.Promise = goblal.Promise;
// Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp/');

// Create Model

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// Create new todo
var newTodo = new Todo({
    text: "This is text",
    completed: true,
    completedAt: 1045
});

// save todo
newTodo.save().then((doc)=>{
    console.log('Saved doc', doc);
}, (e)=>{
    console.log('Could not add doc')
})