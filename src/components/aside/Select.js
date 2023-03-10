import React from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs, filtersSort } from "../../features/blogs/blogsSlice";

const Select = () => {
  const dispatch = useDispatch();

  const handleValue = (e) => {
    if (e.target.value === "Default") {
      dispatch(fetchBlogs());
    }
    dispatch(filtersSort(e.target.value));
  };
  return (
    <select
      name="sort"
      id="lws-sort"
      className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
      onChange={handleValue}
    >
      <option value="Default">Default</option>
      <option value="newest">Newest</option>
      <option value="most_liked">Most Liked</option>
    </select>
  );
};

export default Select;
