import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/post";
import userReducer from "./slices/user";

export default configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
