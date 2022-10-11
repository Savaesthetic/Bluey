import api from '../api';

/*
    All of the api calls use the baseUrl from api.js 
    in this case it is localhost:3500 since we are calling the backend server
*/
export const fetchAllPosts = () => api.get('/posts');

export const fetchPostById = (postId) => api.get(`/posts/${postId}`);

export const createPost = (newPost) => api.post('/posts/create', newPost);

export const deletePost = (postId) => api.delete(`/posts/delete/${postId}`);

export const updatePost = (updatedPost) => api.post('/posts/update', updatedPost);