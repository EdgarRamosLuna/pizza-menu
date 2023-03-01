import React from "react";

const MenuItem = ({
  children,
  price,
  className,
  chstedm,
  chstedp,
  exch,
  exin,
  title,
  fin,
  pas,
}) => {
  return (
    <div className={className}>
      <div className="item-head">
        <h4>{children}</h4>
        {price !== "" ? <h4>{price}</h4> : ""}
      </div>
      {title === "Tamaños & Precios" ? (
        <div className="item-body">
          <ul>
            <li>
              Orilla Rellena
              <div className="t-cont">
                <span>- Mozarella </span>${chstedm}
              </div>
              <div className="t-cont">
                <span>- Piladelphia </span>${chstedp}
              </div>
            </li>
            <li>
              <div className="t-cont">
                Queso Extra
                <span> </span>${exch}
              </div>
            </li>
            <li>
              <div className="t-cont">
                Ingrediente Extra
                <span> </span>${exin}
              </div>
            </li>
            {Number(fin) > 0 ? (
              <li>
                <div className="t-cont">
                  Dedidtos
                  <span> </span>${fin}
                </div>
              </li>
            ) : (
              ""
            )}
            {Number(pas) > 0 ? (
              <li>
                <div className="t-cont">
                  Pastor
                  <span> </span>${pas}
                </div>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MenuItem;
