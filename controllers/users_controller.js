const User = require('../models/user');

module.exports.profile = async function (req, res) {
    return res.render('user_profile', {
        title: 'User Profile'
    });
}

module.exports.signIn = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('users_sign_in', {
        title: 'Codeial/login'
    });
}

module.exports.signUp = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('users_sign_up', {
        title: 'Codeial/Signup'
    });
}

module.exports.logout = function (req, res) {
    return res.end('<h1> User logged out </h1>');
}

// get the signup data

module.exports.create = async function (req, res) {
    const payloadBody = req.body;
    console.log('payloadBody', payloadBody)
    if (payloadBody.password !== payloadBody.confirmPassword) {
        return res.redirect('back');
    }
    const user = await User.findOne({ email: payloadBody.email });
    if (!user) {
        const newUser = await User.create(payloadBody);
        if (newUser) {
            return res.redirect('/users/login');
        }
    } else {
        console.warn('user already exist with this email try with other email', payloadBody.email);
        return res.redirect('back');
    }
}

module.exports.createSession = async function (req, res) {
    /*
        ## Manual Authentication
    */

    // const payloadBody = req.body;
    // const user = await User.findOne({ email: payloadBody.email });
    // if (user.password !== payloadBody.password) {
    //     return res.redirect('back');
    // }
    // res.cookie('user_id', user.id);
    // return res.redirect('/users/profile');

    /*
      ##  Authentication through passport
   */

    return res.redirect('/');

}
