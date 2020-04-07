import React from "react";

const Filter = ({searchText, handlesearchTextChange}) => {
  return (
    <div>
      filter shown with{" "}
      <input value={searchText} onChange={handlesearchTextChange} />
    </div>
  );
};

export default Filter;
