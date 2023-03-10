import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchBlogAPI from "./blogAPI";

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
      });
  },
});

export default blogsSlice.reducer;
