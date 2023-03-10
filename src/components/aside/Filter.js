import React from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs, filtersFilter } from "../../features/blogs/blogsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const handleValues = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Saved") {
      dispatch(filtersFilter(e.target.value));
    } else {
      dispatch(fetchBlogs());
    }
  };
  return (
    <div className="radio-group" onChange={handleValues}>
      {/* handle filter on button click */}
      <div>
        <input
          type="radio"
          name="filter"
          id="lws-all"
          defaultChecked
          className="radio"
          value="All"
        />
        <label htmlFor="lws-all">All</label>
      </div>
      <div>
        <input
          type="radio"
          name="filter"
          id="lws-saved"
          className="radio"
          value="Saved"
        />
        <label htmlFor="lws-saved">Saved</label>
      </div>
    </div>
  );
};

export default Filter;
