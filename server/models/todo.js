var mongoose = require("mongoose");

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


// Export todo
module.exports = {Todo};