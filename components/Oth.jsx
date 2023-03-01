import React from "react";
import Background from "./Background";
import MenuItem from "./MenuItem";

const Oth = ({ data, title }) => {
  //console.log(data);
  return (
    <div className="menu-container">
      <div className="menu-text">
        <h1>{title}</h1>
      </div>
      <div className="menu-items">
        {data.map((item, index) => {
          return (
            <MenuItem
              title={title}
              key={index}
              price={`$${item.price}`}
              indx={index}
            >
              {item.product}
              
            </MenuItem>
          );
        })}
      </div>
    </div>
  );
};

export default Oth;
