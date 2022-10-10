import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchAllPosts } from "../../api/services/postApi";

const postAdapter = createEntityAdapter({
    selectId: (post) => post._id,
});

export const postSlice = createSlice({
    name: 'post',
    initialState: postAdapter.getInitialState(),
    reducers: {
        addPosts: postAdapter.upsertMany,
    }
})

export const setPostState = () => async (dispatch) => {
    try {
        await fetchAllPosts()
            .then(res => res.data)
            .then(posts => dispatch(addPosts(posts)));
    } catch (e) {
        return console.error(e.message);
    }
}

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
} = postAdapter.getSelectors(state => state.post);

export const { addPosts } = postSlice.actions;
export default postSlice.reducer;