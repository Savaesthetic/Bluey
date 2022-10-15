import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { 
    fetchAllPosts, 
    createPost as apiCreatePost,
    updatePost as apiUpdatePost,
    deletePost as apiDeletePost 
} from "../../api/services/postApi";

const postAdapter = createEntityAdapter({
    selectId: (post) => post._id,
});

export const postSlice = createSlice({
    name: 'posts',
    initialState: postAdapter.getInitialState({
        status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    }),
    reducers: {
        addPosts: postAdapter.addMany,
        addPost: postAdapter.addOne,
        deletePost: postAdapter.removeOne,
        updatePost: postAdapter.updateOne
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                postAdapter.addMany(state, action.payload);
            })
            .addCase(createPost.fulfilled, (state, action) => {
                postAdapter.addOne(state, action.payload);
            })
            .addCase(deletePostThunk.fulfilled, (state, action) => {
                postAdapter.removeOne(state, action.payload._id);
            })
            .addCase(updatePostThunk.fulfilled, (state, action) => {
                const {_id, ...changes} = action.payload;
                postAdapter.updateOne(state, { id: _id, changes: changes });
            })
    }
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
    const res = await fetchAllPosts();
    return res.data;
})

export const createPost = createAsyncThunk('posts/createPost', async (newPost) => {
    const res = await apiCreatePost(newPost);
    return res.data;
})

export const deletePostThunk = createAsyncThunk('posts/deletePostThunk', async (postId) => {
    const res = await apiDeletePost(postId);
    return res.data;
})

export const updatePostThunk = createAsyncThunk('posts/updatePostThunk', async (updateBody) => {
    const res = await apiUpdatePost(updateBody);
    return res.data;
})

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
} = postAdapter.getSelectors(state => state.posts);
export const getPostsStatus = (state) => state.posts.status;

export const { addPosts, addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;