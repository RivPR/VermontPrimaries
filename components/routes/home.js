var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    console.log('App up.')
    res.send("App up.")
});

module.exports = router;