import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./Features/PostsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
