var express = require('express');
//1. Add path module
var path = require('path');

var router = express.Router();

/* 2. GET home page. */
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
}); 



router.get('/list', function(req, res, next){
	var myAlarms = [
{	'id':1,
	'name':'Monday School',
	'sound':'ding ding',
	'times': '9:00AM, 9:05AM, 9:10AM',
	'state': 'ON'
},
{	'id':2,
	'name':'Tuesday School',
	'sound':'bing bong',
	'times': '7:00AM, 7:05AM, 7:10AM',
	'state': 'OFF'
},
{	'id':3,
	'name':'Wednesday School',
	'sound':'bing',
	'times': '6:00AM, 6:05AM, 6:10AM',
	'state': 'OFF'
}];
		res.json(myAlarms);
	});









module.exports = router;