import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="menu">
          <ul>
            <li className="logo">
              <img
                src="/assets/img/logo.png"
                alt="logo"
                width={75}
                height={109}
              />
            </li>
          </ul>
        </div>

        {/*
                <li className='logo'>
                        <span className='pizzas'>
                            PIZZAS
                        </span>
                        <br/>
                        Jossepph </li>
                */}
      </div>
    </div>
  );
};

export default Header;
