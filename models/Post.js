const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        required: false
    },

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
