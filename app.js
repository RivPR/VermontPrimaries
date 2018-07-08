var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var server = app.listen(process.env.PORT || 8080, function(){
    console.log("App up on... %s...", server.address().port);
});

//app.use('/', express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('./components/routes'));