const Session = require('../models/session');
const User = require('../models/user');

/**
 * Create session.
 * @param req
 * @param res
 */
exports.create = function login(req, res) {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    //if no token found, response with no token provided
    if (!token) return res.status(401).send("Access denied. No token provided.");
    if(!req.body.email || !req.body.password) {
        res.status(400).send('Missing credentials');
        return;
    }
    User.findOne({email: req.body.email}, (err, user) => {
        if(user !== null) {
            if(err !== null) return res.status(422).send('This user not exist' );
            if(req.body.password !== user.password) return res.status(422).send('Invalid credentials' );
            if (token === user.id) {
                const session = new Session();
                session.userId = req.body.email;
                session.save((err, session) => {
                    if (err) return res.status(422).send('Ops this is embarrassing');
                    return res.status(200).send(session)
                });
            } else {
                return res.send(403)
            }
        } else {
                return res.send('user null')
        }
    });

};

/**
 * Delete session
 * @param req
 * @param res
 */
exports.delete = function logout(req, res) {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    //if no token found, response with no token provided
    if (!token) return res.status(401).send("Access denied. No token provided.");
    User.findById(token, (err) => {
        if(err) return res.status(401).send("Access denied. No token provided.");
        Session.deleteOne({userId: req.body.email}, function (err) {
            res.status(205).send('Logout')
        });
    });
};
