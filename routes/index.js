var express = require('express');
var router = express.Router();
var httpreq = require('httpreq');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {

	httpreq.get("http://psm/getservices/", function (err, data){
		var output=JSON.parse(data.body);
		var userName = process.env['USERPROFILE'].split(path.sep)[2];
		res.render('default', { data:output,  user:userName});
		console.log(data.body);	
	});
  
  
});



module.exports = router;
