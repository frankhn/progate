const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user');
const router = express.Router();


router.route('/test')
   .get(userController.test)

module.exports = router;