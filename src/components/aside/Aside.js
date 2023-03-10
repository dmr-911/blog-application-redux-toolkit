import React from "react";
import Filter from "./Filter";
import Select from "./Select";

const Aside = () => {
  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <Select />
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <Filter />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
