import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  filters: {
    sort: "Default",
    filter: "All",
  },
  blogs: [],
  error: "",
};

const filterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    sortBlogsByDate: (state, action) => {
      const blogs = state.blogs;
      if (state?.filters?.sort === "Newest") {
        const sortedBlogs = blogs?.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        return (state.blogs = sortedBlogs);
      }
    },
  },
});

export default filterSlice.reducer;
export const { sortBlogsByDate } = filterSlice.actions;
