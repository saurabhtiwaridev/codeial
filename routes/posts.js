const express = require('express');

const postRouter = express.Router();

const postsController = require('../controllers/posts_controller');


postRouter.get('/create', postsController.createPost);

postRouter.post('/update', postsController.updatePost);

postRouter.post('/delete', postsController.deletePost);

module.exports = postRouter;
