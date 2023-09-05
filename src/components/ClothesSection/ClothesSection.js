import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  clothingItems,
  handleCreateModal,
  onSelectCard,
  onLikeClick,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!clothingItems || !currentUser) {
    return <div></div>;
  }

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
          {clothingItems
            .filter((item) => {
              return item.owner === currentUser._id;
            })
            .map((item, index) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onSelectCard={onSelectCard}
                  onLikeClick={onLikeClick}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ClothesSection;
