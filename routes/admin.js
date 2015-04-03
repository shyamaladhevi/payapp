var express = require('express');
var router = express.Router();
var path = require('path');
var httpreq = require('httpreq');
/* GET users listing. */
router.get('/', function(req, res, next) {
	httpreq.get("http://psm/getservices/", function (err, data){
		var output=JSON.parse(data.body);
		var userName = process.env['USERPROFILE'].split(path.sep)[2];
		res.render('admin', { data:output,  user:userName});
	});
});

module.exports = router;
