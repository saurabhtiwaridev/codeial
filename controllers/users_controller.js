module.exports.profile = function (req, res) {
    return res.end('<h1> User Profile </h1>');
}

module.exports.login = function (req, res) {
    return res.render('login', {
        title: 'Codial/login'
    });
}

module.exports.signup = function (req, res) {
    return res.render('signup', {
        title: 'Codeial/Signup'
    });
}

module.exports.logout = function (req, res) {
    return res.end('<h1> User logged out </h1>');
}