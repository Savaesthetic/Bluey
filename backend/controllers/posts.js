const Post = require("../model/Post.js");

// All of the Crud Operations for querying the mongodb database is store in here
exports.getAllPosts = async (req, res) => {
    try {
        // .find returns all records inside the Post colllection
        const posts = await Post.find();
        if (!posts) return res.status(204).json({ 'message': 'No posts found.'});
        res.json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) return res.status(204).json({ 'message': 'No post found.'});
        res.json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });    
    }
}

exports.updatePost = async (req, res) => {
    const updatedPost = req.body;
    try {
        // uses the new: true option to return the newly updated record rather than the record before update
        const updated = await Post.findOneAndUpdate({ _id: updatedPost._id }, updatedPost, { new: true });
        res.status(201).json(updated);
    } catch (error) {
        res.status(409).json({ message: error.message });    
    }
}

exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findOneAndDelete({ _id: req.params.postId });
        res.status(200).send(deletedPost);
    } catch (error) {
        res.status(404).json({ message: error.message });    
    }
}