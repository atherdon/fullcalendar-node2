var express = require('express');
var router  = express.Router();
var path    = require('path');

var calendarController = require(path.resolve(__dirname, 'calendar-controller'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FullCalendar with Event Modals' });
});

router.get('/bootstrap', function(req, res, next) {
  res.render('bootstrap', { 
  	title: 'Express',
  	bootstrap: true 
  });
});

router.get('/jquery', function(req, res, next) {
  res.render('jqueryui', { 
  	title: 'Express',
  	'jqueryui': true 
  });
});

router.get('/gcal', function(req, res, next) {
  res.render('google-calendar', { 
  	title: 'Express',
  	'googleCalendar': true,
  	
  	GOOGLE_KEY: process.env.GOOGLE_CALENDAR_API_KEY,
  	GOOGLE_CLIENT: process.env.GOOGLE_CALENDAR_CLIENT_ID 
  });
});

router.get('/calendarJSON', calendarController.calendarJSON);

module.exports = router;
