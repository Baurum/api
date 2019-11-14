const Session = require('../models/session');
const User = require('../models/user');

exports.create = function login(req, res) {
    if(!req.body.email || !req.body.password) {
        res.status(400).send('Missing credentials');
        return;
    }
    User.findOne({email: req.body.email}, (err, user) => {
        if(user !== null) {
            if(err === null) return res.status(422).send('This user not exist' );
            if(err || req.body.password !== user.password) return res.status(422).send('Invalid credentials' );
        } else {
            const session = new Session();
            session.userId = req.body.email;
            session.save((err, session) => {
                    if (err) return res.status(422).send('Ops this is embarrassing');
                    return res.status(200).send(session)
                });
        }
    });

};

exports.delete = function logout(req, res) {
    res.send('logout')
};
