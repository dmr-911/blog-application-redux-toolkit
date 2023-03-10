import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchRelatedBlogsAPI from "./relatedBlogsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  error: "",
};

// async thunk
export const fetchRelatedBlogs = createAsyncThunk(
  "relatedBlogs/fetchBlogs",
  async ({ blogId, tags }) => {
    const posts = await fetchRelatedBlogsAPI({ blogId, tags });
    return posts;
  }
);

const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = "";
        state.blogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.blogs = [];
      });
  },
});

export default relatedBlogsSlice.reducer;
