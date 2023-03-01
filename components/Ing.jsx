import React from "react";
import Background from "./Background";
import MenuItem from "./MenuItem";

const Ing = ({ data, title }) => {
  return (
    <div className="menu-container">
      <div className="menu-text">
        <h1>{title}</h1>
      </div>
      <div className="menu-items ings">
        {data.map((item, index) => {
          if (Number(item.is_esp) !== 1 && Number(item.is_ing) === 1 && Number(item.is_esp) < 2 ) {
            return (
              <MenuItem key={index} price={``} className="m-i">
                {item.name}
              </MenuItem>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Ing;
