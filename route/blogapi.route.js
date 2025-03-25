const express = require(`express`)

let router = express.Router();

const { register, login } = require('../controller/auth.con');
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controller/post.con');
const authMiddleware = require('../middleware/authMiddleware')

router.post('/auth/register', register);
router.post('/auth/login', login);

router.post('/posts', authMiddleware, createPost);
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', authMiddleware, updatePost);
router.delete('/posts/:id', authMiddleware, deletePost);

module.exports = router
