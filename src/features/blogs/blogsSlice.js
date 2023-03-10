import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchBlogsAPI from "./blogsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  filters: {
    sort: "Default",
    filter: "All",
  },
  error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await fetchBlogsAPI();
  return posts;
});

const blogsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filtersSort: (state, action) => {
      if (action.payload === "newest") {
        state.blogs = state.blogs?.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (action.payload === "most_liked") {
        state.blogs = state.blogs?.sort((a, b) => b.likes - a.likes);
      } else {
        state.filters.sort = "Default";
      }
    },
    filtersFilter: (state, action) => {
      if (action.payload === "Saved") {
        state.filters.filter = action.payload;
        state.blogs = state.blogs.filter((blog) => blog.isSaved);
      } else {
        state.filters.filter = "All";
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = "";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.blogs = [];
      });
  },
});

export default blogsSlice.reducer;
export const { sortBlogsByDate, filtersSort, filtersFilter } =
  blogsSlice.actions;
