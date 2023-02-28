import React from "react";

const MenuItem = ({ children, price }) => {
  return (
    <div>
      <div className="item-head">
        <h4>{children}</h4>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default MenuItem;
