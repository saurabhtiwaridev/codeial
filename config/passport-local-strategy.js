const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');


// authentication using passport
passport.use(new localStrategy({
    usernameField: 'email'
},
    async function (email, password, done) {
        // find a user and establish the identity
        const user = await User.findOne({ email: email });
        if (!user || user.password != password) {
            console.log('Invalid username/password');
            return done(null, false);
        } else {
            return done(null, user);
        }

    }
));

// serailizing the user to decide which key is to be kept in the cookies

passport.serializeUser(function (user, done) {
    return done(null, user.id);
});

// deserailizing the user from the key in the cookies

passport.deserializeUser(async function (id, done) {
    const user = await User.findById(id);
    if (!user || user.id != id) {
        console.log('something bad happend');
        return done('user not found or some one hacking you');
    }
    return done(null, user);
});

passport.checkAuthentication = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/users/login');
}

passport.setAuthenticatedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    return next();
}

module.exports = passport;