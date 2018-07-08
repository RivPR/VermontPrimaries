var express = require('express');
var router = express.Router();

router.use('/2018', require('./home'));

module.exports = router;