import React from "react";
import "./ClothesSection.css";
const ClothingSection = ({ clothingItems }) => {
  return (
    <div>
      <div className="clothes">
        <div className=" clothing__items">
          <p>Your Items</p>
          <p>+ Add new</p>
        </div>
        <div className="clothes__items">
          {clothingItems.map((item) => {
            return (
              <div className="clothes__item">
                <span className="clothes__name">{item.name}</span>
                <img
                  key={item.id}
                  className="clothes__image"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { ClothingSection };
