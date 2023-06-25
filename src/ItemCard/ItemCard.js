import "./ItemCard.css";
const ItemCard = ({ item }) => {
  return (
    <div className="card__section">
      <div>
        <img className="card__image" src={item.link} alt={item.name} />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};
export default ItemCard;
