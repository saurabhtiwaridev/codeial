const { application } = require('express');
const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users_controller');


router.get('/profile', usersController.profile);

router.get('/login', usersController.login);

router.get('/logout', usersController.logout);

module.exports = router;