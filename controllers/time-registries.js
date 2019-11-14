const TimeRegistry = require('../models/time-registry');

/**
 * Get time registry listing.
 * @param req
 * @param res
 */
exports.index = function index(req, res) {
    TimeRegistry.find({userId: req.body.userId}, (err, timeRegistries) => {
        if(err) return res.status(404).send('Not found');
        return res.status(200).send(timeRegistries)
    })
};

/**
 * Create time registry.
 * @param req
 * @param res
 */
exports.create = function create(req, res) {
    const newRegistry = new TimeRegistry();
    newRegistry.userId = req.body.userId;
    newRegistry.startDate = req.body.startDate;
    newRegistry.endDate = req.body.endDate;
    newRegistry.entryTime = req.body.entryTime;
    newRegistry.exitTime = req.body.exitTime;
    newRegistry.save((err, registry) => {
        if (err) return res.status(422).send('Something was wrong');
        return res.status(201).send(registry)
    });
};
