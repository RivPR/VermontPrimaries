var express = require('express');
var router = express.Router();

var FileFunctions = require('../FileFunctions');

var File = new FileFunctions();

router.get('/', function(req, res){
    res.send("App up. (ping)");
});

router.get('/populateDBFromCSV', function(req, res){
    console.log('Populating begun.');
    File.csvToMongo();
    res.send("Done populating.");
});

module.exports = router;