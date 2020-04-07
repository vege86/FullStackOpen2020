import React from "react";

const Filter = ({searchText, handlesearchTextChange}) => {
  return (
    <div>
      find countries 
      <input value={searchText} onChange={handlesearchTextChange} />
    </div>
  );
};

export default Filter;
