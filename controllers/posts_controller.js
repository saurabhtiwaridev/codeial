
module.exports.createPost = function (req, res) {
    return res.end('Post Created');
}

module.exports.readPost = function (req, res) {
    return res.end('Post readed');
}

module.exports.updatePost = function (req, res) {
    return res.end('update the post')
}

module.exports.deletePost = function (req, res) {
    return res.end('delete the post')
}