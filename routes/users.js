const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/users_controller');
//router.get('/profile', passport.checkAuthentication, userController.profile);

// for user Friends
router.get('/profile/:id', passport.checkAuthentication, userController.profile);
router.post('/update/:id', passport.checkAuthentication, userController.update);

router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);


router.post('/create', userController.create);

// router.post('/create_session', userController.createSession);

//use passport as middleware to authenticate

router.post('/create_session', passport.authenticate(
    'local', { failureRedirect: '/users/sign-in' },
), userController.createSession);

//-------------for sign out---------------------------------------------------
router.get('/sign-out', userController.destroySession);

module.exports = router;