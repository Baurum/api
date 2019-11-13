const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/:id', async(req, res, next) => {
  const users = await User.find();
  console.log(req.body);
  console.log(users);
  res.send('respond with a resource');
});

router.post('/', async (req, res, next) => {
  console.log(new User());
  console.log(req.body);
  const user = new User(req.body);
  user.email = req.body.email;
  await user.save();
  res.send('new user with id: ' + user.id + ' ' + user.email);
});

module.exports = router;
