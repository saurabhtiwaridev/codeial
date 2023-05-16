const express = require('express');

const router = express.Router();

const passport = require('passport');

const usersController = require('../controllers/users_controller');


router.get('/profile', passport.checkAuthentication, usersController.profile);

router.get('/login', usersController.signIn);

router.get('/signup', usersController.signUp);

router.post('/create', usersController.create);

// use passport as middleware to auth
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/users/login' },),
    usersController.createSession);

router.get('/profile', usersController.profile);

router.get('/logout', usersController.logout);

module.exports = router;