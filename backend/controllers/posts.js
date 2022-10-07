const Post = require("../model/Post.js");

exports.getAllPosts = async (req, res) => {
    try {
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
    const updates = req.body;
    try {
        const updated = await Post.findOneAndUpdate({ _id: req.params.postId }, updates);
        res.status(201).json(updated);
    } catch (error) {
        res.status(409).json({ message: error.message });    
    }
}

exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findOneAndDelete({ _id: req.params.postId });
        // might have to do: res.status(200).send({success: true});
        res.status(200).send(deletedPost);
    } catch (error) {
        res.status(404).json({ message: error.message });    
    }
}