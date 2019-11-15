const TimeRegistry = require('../models/time-registry');
const User = require('../models/user');
const Session = require('../models/session');


/**
 * Get time registry listing.
 * @param req
 * @param res
 */
exports.index = function index(req, res) {
    const token = req.headers["authorization"];
    //if no token found, response with no token provided
    if (!token) return res.status(401).send("Access denied. No token provided.");
    // if (token !== req.body.userId) return res.status(403).send("Access denied. No token provided.");
    Session.findById(token, (err, session) => {
        if (err) {
            return res.status(403).send('Access denied.');
        } else if (session !== null) {
            TimeRegistry.find({userId: session.userId}, (err, timeRegistries) => {
                if (err) return res.status(404).send('Not found');
                return res.status(200).send(timeRegistries)
            });
        }
    });

};

/**
 * Create time registry.
 * @param req
 * @param res
 */
exports.create = function create(req, res) {
    const token = req.headers["authorization"];
    //if no token found, response with no token provided
    if (!token) return res.status(401).send("Access denied. No token provided.");
    Session.findById(token, (err, session) => {
        if (err) return res.status(401).send("Access denied. No token provided.");
        if (session !== null) {
            const newRegistry = new TimeRegistry();
            newRegistry.userId = session.userId;
            newRegistry.startDate = req.body.startDate;
            newRegistry.endDate = req.body.endDate;
            newRegistry.entryTime = req.body.entryTime;
            newRegistry.exitTime = req.body.exitTime;
            newRegistry.save((err, registry) => {
                if (err) return res.status(422).send('Something was wrong');
                return res.status(201).send(registry)
            });
        } else {
            res.status(401).send("Access denied. No token provided.");
        }
    });


    // User.findById(token, (err) => {
    //     if(err) return res.status(401).send("Access denied. No token provided.");
    //     if(token === req.body.userId) {
    //         const newRegistry = new TimeRegistry();
    //         newRegistry.userId = req.body.userId;
    //         newRegistry.startDate = req.body.startDate;
    //         newRegistry.endDate = req.body.endDate;
    //         newRegistry.entryTime = req.body.entryTime;
    //         newRegistry.exitTime = req.body.exitTime;
    //         newRegistry.save((err, registry) => {
    //             if (err) return res.status(422).send('Something was wrong');
    //             return res.status(201).send(registry)
    //         });
    //     } else {
    //         return res.status(401)
    //     }
    // });
};
