import { useContext } from "react";

import WeatherCard from "../WeatherCard/WeatherCard";

import ItemCard from "../ItemCard/ItemCard";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ wheatherTemp, onSelectCard, clothingItems, handlelikeclick }) {
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

  const filteredcards = clothingItems.filter((item) => {
    if (item.weather) {
      return item.weather.toLowerCase() === weatherType;
    }
    return "";
  });

  return (
    <main filteredcards={clothingItems} className="Main">
      <WeatherCard day={true} type="rain" wheatherTemp={temp} />
      <section className="cards" id="cards">
        <div className="card__heading">
          Today is {temp}/ You may want to wear:
        </div>
        <div className="card__items">
          {filteredcards.map((item, index) => {
            // const prependItem = filteredcards.length - 1 - index;
            // const renderItem = filteredcards[prependItem];
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                handlelikeclick={handlelikeclick}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
export default Main;
