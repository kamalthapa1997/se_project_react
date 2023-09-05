import { useContext } from "react";
import { useState } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, closeModal, onLikeClick }) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);
  const checkLikeStatus = () => {
    return item.likes.some((userId) => userId === currentUser._id);
  };
  const [isLiked, setIsLiked] = useState(checkLikeStatus);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.className);
    setIsLiked(!isLiked);
    console.log("after clicked", isLiked);

    onLikeClick({ id: item._id, isLiked: !isLiked });
  };

  return (
    <div className="card__section">
      <div>
        <img
          className="card__image"
          src={item.imageUrl}
          alt={item.name}
          onKeyDown={closeModal}
          onClick={() => {
            onSelectCard(item);
          }}
        />
      </div>
      <div className="card__name">{item.name}</div>
      {loggedIn ? (
        <button
          className={
            item.likes.includes(currentUser._id)
              ? "card__afterlike-btn"
              : "card__beforelike-btn"
          }
          onClick={(e) => {
            handleClick(e);
          }}
        ></button>
      ) : (
        ""
      )}
    </div>
  );
};
export default ItemCard;
