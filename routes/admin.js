var express = require('express');
var router = express.Router();
var httpreq = require('httpreq');
var services=require('./services');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var output=services.getcomponents();	
	res.render('admin', { data:output,  user:services.getuser()});
});
router.post('/createprofile', function(req, res, next) {
	//var output=services.getcomponents();	
	//res.render('default', { data:output,  user:services.getuser()});
	console.log(req.body);
});

module.exports = router;
