import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBySort } from "../../features/filter/filterSlice";

const Select = () => {
  const { filters } = useSelector((state) => state.filter);
  const { sort } = filters || {};
  const dispatch = useDispatch();

  const handleValue = (e) => {
    dispatch(filterBySort(e.target.value));
  };
  return (
    <select
      name="sort"
      id="lws-sort"
      className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
      defaultValue={sort}
      onChange={handleValue}
    >
      <option value="Default">Default</option>
      <option value="newest">Newest</option>
      <option value="most_liked">Most Liked</option>
    </select>
  );
};

export default Select;
