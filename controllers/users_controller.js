module.exports.profile = function (req, res) {
    return res.end('<h1> User Profile </h1>');
}

module.exports.login = function (req, res) {
    return res.end('<h1> User logged In </h1>');
}

module.exports.logout = function (req, res) {
    return res.end('<h1> User logged out </h1>');
}