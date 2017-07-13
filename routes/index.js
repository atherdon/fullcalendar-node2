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
  res.render('jquery-ui', { 
  	title: 'Express',
  	'jquery-ui': true 
  });
});

router.get('/gcal', function(req, res, next) {
  res.render('google-calendar', { 
  	title: 'Express',
  	'google-calendar': true 
  });
});

router.get('/calendarJSON', calendarController.calendarJSON);

module.exports = router;
