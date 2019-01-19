var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp/');

// Create Model

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// Create new todo
var newTodo = new Todo({
    text: "Smoke some weed "
});

// save todo
newTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
}, (e)=>{
    console.log('Could not add doc')
})

// Create User

var User = mongoose.model('User', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: "innocent@innocent.com"
});

newUser.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined,2))
}, (e)=>{
    console.log('Couldnt create user')
})

