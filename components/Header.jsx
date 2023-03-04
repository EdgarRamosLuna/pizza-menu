import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="menu">
          <ul>
            <li className="logo">
              <Image
                src="/assets/img/pjl.png"
                alt="logo"
                width={300}
                height={72}
              />
            </li>
          </ul>
          <div className="info">
          {`Calle Reforma # 15 zona centro, Parras Coahuila
          🛵 842 422 0123`}

          </div>
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
