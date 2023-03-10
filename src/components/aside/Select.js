import React from "react";

const Select = () => {
  return (
    <select
      name="sort"
      id="lws-sort"
      className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
    >
      <option value>Default</option>
      <option value="newest">Newest</option>
      <option value="most_liked">Most Liked</option>
    </select>
  );
};

export default Select;
