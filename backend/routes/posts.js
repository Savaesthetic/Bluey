const express = require('express');
const router = express.Router();
const postController = require("../controllers/posts.js");

router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);
router.post('/create', postController.createPost);
router.post('/update', postController.updatePost);
router.delete('/delete/:postId', postController.deletePost);

module.exports = router;