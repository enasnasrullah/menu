import React from "react";

export const Categories = ({ categories, filterdCategories }) => {
  const renderdButtons = categories.map((category, index) => {
    return (
      <div className="container ">
        <button
          key={index}
          className="filterd"
          onClick={() => {
            filterdCategories(category);
          }}
        >
          {category}
        </button>
      </div>
    );
  });
  return <div className="button-container mt-3">{renderdButtons}</div>;
};
