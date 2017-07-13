var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FullCalendar with Event Modals' });
});

router.get('/bootstrap', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	bootstrap: true 
  });
});

router.get('/jquery', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	'jquery-ui': true 
  });
});

router.get('/gcal', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	'google-calendar': true 
  });
});

router.get('/calendarJSON', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
