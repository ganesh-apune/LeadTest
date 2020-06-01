const express = require('express');
const router = express.Router({ caseSensitive: true });
const userController = require('../controller/user.controller');
const passport = require('passport');
router.post('/signup',userController.signup);
router.post('/signin',passport.authenticate('jwt', { session: false }),userController.signin);
module.exports = router;