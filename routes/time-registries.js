const express = require('express');
const router = express.Router();
const registryController = require('../controllers/time-registries');

/* GET time registry listing. */
router.get('/', async(req, res, next) => {
    registryController.index(req, res);
});

/* POST time registry. */
router.post('/', async (req, res, next) => {
    registryController.create(req, res);
});

module.exports = router;
