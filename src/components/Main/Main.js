import { useContext } from "react";
import WheatherCard from "../WheatherCard/WheatherCard";

import ItemCard from "../ItemCard/ItemCard";

import { defaultClothingItems } from "../../utils/constant";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

// import "./Main.css";

function Main({ modalExit, wheatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const Temp = wheatherTemp?.temperature?.[currentTemperatureUnit];

  const getWeatherType = () => {
    if (parseInt(Temp) >= 86) {
      return "hot";
    } else if (parseInt(Temp) >= 66 && parseInt(Temp) <= 85) {
      return "warm";
    } else if (parseInt(Temp) <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filteredcards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <section filteredcards={clothingItems} className="Main">
      <WheatherCard day={true} type="rain" wheatherTemp={Temp} />
      <section className="cards" id="cards">
        <div className="card__heading">
          Today is {Temp}/ You may want to wear:
        </div>
        <div className="card__items">
          {filteredcards.map((item) => {
            return (
              <ItemCard
                key={item.id}
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
