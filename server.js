var express = require('express');
var mongoose = require('mongoose'); 

// MongoDB configuration
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/products');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));

var app = express(); 

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

restful = require('node-restful');
var design = require('./api/Model/Design'); 
var Resource = app.resource = restful.model('design', design.designSchema)
  .methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/design');

app.listen(process.env.PORT || 8081);

console.log("client-design-api started");


