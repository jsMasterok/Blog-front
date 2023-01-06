import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api/Api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await Api.get("/posts");
  return data;
});


const initialState = {
  posts: {
    items: [],
    isLoading: true,
    status: "OK",
  },
};

const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.isLoading = true;
      state.posts.status = "Loading";

    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.isLoading = false;
      state.posts.status = "OK";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.isLoading = false;
      state.posts.status = "Error";
    },
  },
});

export const postsReducer = postSlice.reducer;
