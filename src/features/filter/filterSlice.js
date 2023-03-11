import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  filters: {
    sort: "Default",
    filter: "Saved",
  },
  blogs: [],
  error: "",
};

const filterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    filterBySort: (state, action) => {
      state.filters.sort = action.payload;
    },
    filterAction: (state, action) => {
      state.filters.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterBySort, filterAction } = filterSlice.actions;
