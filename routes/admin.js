var express = require('express');
var router = express.Router();
var httpreq = require('httpreq');
var services=require('./services');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var output=services.getcomponents();	
	res.render('admin', { data:output,  user:services.getuser()});
});

module.exports = router;
