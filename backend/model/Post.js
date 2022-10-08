const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    dislikes: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);