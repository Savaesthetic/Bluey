import api from '../api';

export const fetchAllPosts = () => api.get('/posts');

export const fetchPostById = () => {};

export const createPost = (newPost) => api.post('/posts/create', newPost);

export const deletePost = () => {};

export const updatePost = () => {};