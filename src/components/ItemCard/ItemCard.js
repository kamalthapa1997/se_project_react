import { useContext } from "react";
import { useState } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, closeModal, handlelikeclick }) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);
  const checkLikeStatus = () => {
    return item.likes.some((userId) => userId === currentUser._id);
  };
  const [isLiked, setIsLiked] = useState(checkLikeStatus);

  const handleClick = () => {
    handlelikeclick({ id: item._id, isLiked: !isLiked });
    setIsLiked(!isLiked);
  };

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
            className={
              item.likes.includes(currentUser._id)
                ? "card__afterlike-btn"
                : "card__beforelike-btn"
            }
            onClick={handleClick}
          ></button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ItemCard;
