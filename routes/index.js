var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Get request' });
});

/* POST = create */
router.post('/', function (req, res, next) {
  res.render('index', {title: 'Create'})
});

/* PUT = update */
router.put('/', function (req, res, next) {
  res.render('index', {title: 'Update'})
});

/* DELETE = destroy */
router.delete('/', function (req, res, next) {
  res.render('index', {title: 'Delete'})
});

module.exports = router;
