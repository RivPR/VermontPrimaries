var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoConnectString = `mongodb://${(process.env.MONGO_HOST || "localhost:27017")}/vt_prim`;
// create the DB connection
mongoose.connect(mongoConnectString);
var db = mongoose.connection;

db.once('open', function(){
    console.log("Mongoose connected to " + mongoConnectString + ".");
});
db.on('error', console.error.bind(console, 'connection error: '));

var server = app.listen(process.env.PORT || 8080, function(){
    console.log("App up on... %s...", server.address().port);
});

//app.use('/', express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('./components/routes'));