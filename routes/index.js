var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FullCalendar with Event Modals' });
});

router.get('/bootstrap', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jquery', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gcal', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/calendarJSON', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
