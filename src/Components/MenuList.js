import React from "react";

export const MenuList = ({ menu }) => {
  const renderdMenu = menu.map((item) => {
    return (
      <div className="col-md-6 d-flex  mt-5 " key={item.id}>
        <div>
          <img src={item.img} className="me-2" alt={item.title} />
        </div>
        <div className=" mt-3">
          <div className="details">
            <h6 className="me-5">{item.title}</h6>
            <h5>{item.price}</h5>
          </div>
          <div className="line-dot"></div>
          <p>{item.desc}</p>
        </div>
      </div>
    );
  });
  return <div className="row">{renderdMenu}</div>;
};
