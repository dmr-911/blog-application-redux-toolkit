import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogAPI, updateBlogAPI } from "./blogAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blog: {},
  error: "",
};

// async thunk
export const fetchBlog = createAsyncThunk("post/fetchPost", async ({ id }) => {
  const post = await fetchBlogAPI({ id });
  return post;
});

export const updateBlog = createAsyncThunk(
  "post/update",
  async ({ id, totalLikes }) => {
    const newBlog = await updateBlogAPI({ id, totalLikes });

    return newBlog;
  }
);

const blogsSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = "";
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.blog = {};
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.blog.likes = state.blog.likes + 1;
      });
  },
});

export default blogsSlice.reducer;
