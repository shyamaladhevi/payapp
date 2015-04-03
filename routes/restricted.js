var express = require('express');
var router = express.Router();
var path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
var userName = process.env['USERPROFILE'].split(path.sep)[2];
  res.render('restricted',{data:'respond with a resource',  user:userName});
});

module.exports = router;
