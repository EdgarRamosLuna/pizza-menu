import React from "react";
import Background from "./Background";
import MenuItem from "./MenuItem";

const Menu = ({ data, title }) => {
  //console.log(data);
  return (
    <div className="menu-container">
      <div className="menu-text">
        <p>Pizzas</p>
        <h1>{title}</h1>
      </div>
      <div className="menu-items">
        {data.map((item, index) => {
          if (index <= 5) {
            return (
              <MenuItem
                title={title}
                key={index}
                price={`$${item.price}`}
                chstedm={item.chstedm}
                chstedp={item.chstedp}
                exch={item.exch}
                exin={item.exin}
                fin={item.fin}
                pas={item.pas}
              >
                {item.size}
              </MenuItem>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Menu;
