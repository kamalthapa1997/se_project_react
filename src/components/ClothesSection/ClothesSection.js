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
              // console.log("for profile clothes", item);
              return (
                <ItemCard
                  item={item}
                  // item={renderItem}
                  onSelectCard={onSelectCard}
                  // closeModal={closeModal}
                  // modalExit={modalExit}
                  onLikeClick={onLikeClick}
                />

                // <div key={item.id} className="clothes__item">
                //   <div>
                //     <span className="clothes__name">{item.name}</span>
                //   </div>
                //   <img
                //     className="clothes__image"
                //     src={item.imageUrl}
                //     alt={item.name}
                //     onClick={() => onSelectCard(item)}
                //   />
                //   <button
                //     className={
                //       item.likes.includes(currentUser._id)
                //         ? "card__afterlike-btn"
                //         : "card__beforelike-btn"
                //     }
                //     src={beforeLikeBtn}
                //     onClick={onLikeClick}
                //   ></button>
                // </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ClothesSection;
