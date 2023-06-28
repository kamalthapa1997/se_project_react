import "./ItemCard.css";
const ItemCard = ({ item, onSelectCard, closeModal }) => {
  return (
    <div className="card__section">
      <div>
        <img
          className="card__image"
          src={item.link}
          alt={item.name}
          onKeyDown={closeModal}
          onClick={() => {
            onSelectCard(item);
          }}
        />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};
export default ItemCard;
