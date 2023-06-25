import WheatherCard from "../WheatherCard/WheatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../Utils/Constant";

function Main({ wheatherTemp }) {
  return (
    <section className="Main">
      <WheatherCard day={true} type="rain" wheatherTemp={wheatherTemp} />
      <section className="card__section" id="cards">
        <div>Today is {wheatherTemp}/ You may want to wear:</div>
        <div className="card__items">
          {defaultClothingItems.map((item) => {
            return <ItemCard item={item} />;
          })}
        </div>
      </section>
    </section>
  );
}
export default Main;
