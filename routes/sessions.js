const express = require('express');
const router = express.Router();
const sessionsController = require('../controllers/sessions');

/* POST session */
router.post('/', (req, res, next) => {
    sessionsController.create(req, res);
});

/* DELETE session */
router.delete('/', function (req, res, next) {
    sessionsController.delete(req, res);
});

module.exports = router;
