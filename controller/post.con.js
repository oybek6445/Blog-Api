const multer = require('multer');
const Post = require('../models/Post');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});

const upload = multer({ storage });

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({
            title,
            content,
            author: req.userId,
            image: req.file ? req.file.path : null 
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Xatolik yuz berdi', error });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username image');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Xatolik yuz berdi', error });
    }
};





const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post topilmadi' });

        if (post.author.toString() !== req.userId) {
            return res.status(403).json({ message: 'Bu postni o‘chirish huquqingiz yo‘q' });
        }

        await post.deleteOne();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Xatolik yuz berdi', error });
    }
};

module.exports = {
    createPost: [upload.single('image'), createPost], 
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
};
