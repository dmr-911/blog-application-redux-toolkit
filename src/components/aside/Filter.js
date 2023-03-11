import React from "react";
import { useDispatch } from "react-redux";
import { filterAction } from "../../features/filter/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const handleValues = (e) => {
    dispatch(filterAction(e.target.value));
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
