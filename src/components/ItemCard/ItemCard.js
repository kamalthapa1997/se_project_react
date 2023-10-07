import { useContext } from "react";

import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, closeModal, handlelikeclick }) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);

  const isLiked = item.likes.some((userId) => userId === currentUser._id);

  return (
    <div className="card__section">
      <div>
        <img
          key={item._id}
          className="card__image"
          src={item.imageUrl}
          alt={item.name}
          onKeyDown={closeModal}
          onClick={() => {
            onSelectCard(item);
          }}
        />
      </div>
      <div className="card__image-info">
        <div className="card__name">{item.name}</div>
        {loggedIn ? (
          <button
            className={isLiked ? "card__afterlike-btn" : "card__beforelike-btn"}
            onClick={() => {
              handlelikeclick(item?._id, isLiked);
            }}
          ></button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ItemCard;
