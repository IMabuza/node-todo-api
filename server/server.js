var express = require('express');
var bodyParser = require('body-parser');

var {mongooose} = require('./db/mongoose');
var {User} = require('./models/user');
var {User} = require('./models/todo');

var app = express();

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});