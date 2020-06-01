const express = require('express');
const router = express.Router({ caseSensitive: true });
const passport = require('passport');
const passportJWT = require('passport-jwt');
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secretKey';
const courseController = require('../controller/course.controller');
router.get('/getAll',courseController.getAllCourses);
router.post('/create',passport.authenticate('jwt', { session: false }),courseController.create);
router.put('/update',passport.authenticate('jwt', { session: false }),courseController.updateCourse);
router.post('/delete',passport.authenticate('jwt', { session: false }),courseController.deleteCourse);
router.get('/sort',courseController.sortCourse);
router.get('/filterByCategory',courseController.filterCourseByCategory);

module.exports = router;