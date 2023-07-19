import React from "react";
import "./ClothesSection.css";
const ClothesSection = ({ clothingItems, handleCreateModal, onSelectCard }) => {
  return (
    <div>
      <div className="clothes">
        <div className=" clothes__captions">
          <p className="clothes__caption">Your Items</p>
          <p className="clothes__caption" onClick={handleCreateModal}>
            + Add new
          </p>
        </div>
        <div className="clothes__items">
          {clothingItems.map((item) => {
            return (
              <div key={item.id} className="clothes__item">
                <span className="clothes__name">{item.name}</span>
                <img
                  className="clothes__image"
                  src={item.imageUrl}
                  alt={item.name}
                  onClick={() => onSelectCard(item)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ClothesSection;
