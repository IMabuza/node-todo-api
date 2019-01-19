var mongoose = require('mongoose');

// Create User Model

var User = mongoose.model('User', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User}