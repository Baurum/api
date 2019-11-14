var User = require('../models/user');

exports.create = function create(req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(422).send('Error fatal');
        return;
    }
    User.findOne({email: req.body.email}, (err, user) => {
        if(user !== null) {
            if (req.body.email === user.email) {
                return res.status(422).send('This user already exits');
            }
        } else {
            const newUser = new User(req.body);
            newUser.save((err, user) => {
                if (err) return res.status(422).send('Can not create');
                return res.status(201).send(user)
            });
        }
    });

};
