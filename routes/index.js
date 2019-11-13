const express = require('express');
const router = express.Router();
/* GET */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Get request'});
});

/* POST = create */
router.post('/', (req, res, next) => {
    res.render('index', {title: 'Create'});
    res.send(req.body);
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
