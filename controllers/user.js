var User = require('../models/user');
//
// exports.getUser = function getUser(req, res) {
//     const userId = req.params.id;
//     User.findById(userId, (err, user) => {
//         if (err) return res.status(500).send({message: 'Server Internal Error'});
//         if (!user) return res.status(404).send({message: 'Not found**'});
//         followThisUser(req.user.sub, userId).then((value) => {
//             user.password = undefined;
//             return res.status(200).send({
//                 user,
//                 following: value.following,
//                 followed: value.followed
//             });
//         });
//
//     });
// };
