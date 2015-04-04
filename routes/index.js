var express = require('express');
var router = express.Router();
var httpreq = require('httpreq');
var services=require('./services');

/* GET home page. */
router.get('/', function(req, res, next) {
	var output=services.getcomponents();	
	res.render('default', { data:output,  user:services.getuser()});
	//console.log(output);
});


 


module.exports = router;
