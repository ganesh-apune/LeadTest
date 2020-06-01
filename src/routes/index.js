const express = require('express');
const router = express.Router();
const user = require('../controller/user.controller');
const course = require('./course.route');
const category = require('./category.route');
const passport = require('passport');
const passportJWT = require('passport-jwt');
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secretKey';

const { User } = require('../models/index');
// passport implementation
let jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    User.findOne({
      where: {
        id: jwt_payload.id
      }
    })
      .then(user => {
        if (user) {
          next(null, user);
        } else {
          next(null, false);
        }
      });
  });
  passport.use(jwtStrategy);
  router.use(passport.initialize());

router.use('/user',user);  // user route
router.use('/course', course);
router.use('/category',category);
router.use('/auth/course', passport.authenticate('jwt', { session: false }), course); // authentication is required
router.use('/auth/category', passport.authenticate('jwt', { session: false }), category);// authentication is required

module.exports = router;