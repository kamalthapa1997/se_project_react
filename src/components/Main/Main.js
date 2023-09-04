import { useContext } from "react";

import WeatherCard from "../WeatherCard/WeatherCard";

import ItemCard from "../ItemCard/ItemCard";

import { defaultClothingItems } from "../../utils/constant";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ modalExit, wheatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = wheatherTemp?.temperature?.[currentTemperatureUnit];

  const getWeatherType = () => {
    if (currentTemperatureUnit === "F") {
      if (parseInt(temp) >= 86) {
        return "hot";
      } else if (parseInt(temp) >= 66 && parseInt(temp) <= 85) {
        return "warm";
      } else if (parseInt(temp) <= 65) {
        return "cold";
      }
    } else if (currentTemperatureUnit === "C") {
      if (parseInt(temp) >= 30) {
        return "hot";
      } else if (parseInt(temp) >= 19 && parseInt(temp) <= 30) {
        return "warm";
      } else if (parseInt(temp) <= 18) {
        return "cold";
      }
    }
  };
  const weatherType = getWeatherType();

  const filteredcards = clothingItems.filter(
    (item) => item.weather === weatherType
  );
  console.log(filteredcards);

  return (
    <section filteredcards={clothingItems} className="Main">
      <WeatherCard day={true} type="rain" wheatherTemp={temp} />
      <section className="cards" id="cards">
        <div className="card__heading">
          Today is {temp}/ You may want to wear:
        </div>
        <div className="card__items">
          {filteredcards.map((item, index) => {
            const prependItem = filteredcards.length - 1 - index;
            const renderItem = filteredcards[prependItem];
            return (
              <ItemCard
                key={renderItem.id}
                item={renderItem}
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
