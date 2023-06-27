import WheatherCard from "../WheatherCard/WheatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/Constant";
import { useMemo } from "react";
// import "./Main.css";

function Main({ modalExit, wheatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (wheatherTemp >= 86) {
      return "hot";
    } else if (wheatherTemp >= 66 && wheatherTemp <= 85) {
      return "warm";
    } else if (wheatherTemp <= 65) {
      return "cold";
    }
  }, [wheatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <section className="Main">
      <WheatherCard day={true} type="rain" wheatherTemp={wheatherTemp} />
      <section className="cards" id="cards">
        <div className="card__heading">
          Today is {wheatherTemp}&deg; F/ You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                modalExit={modalExit}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}
export default Main;
