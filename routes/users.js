const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

/* POST user. */
router.post('/', async (req, res, next) => {
  userController.create(req, res);
});

module.exports = router;
