import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constant";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, wheatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const weatherImageSrcUrl = weatherOption?.url || "";

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      return "F";
    } else if (currentTemperatureUnit === "C") {
      return "C";
    }
  };

  return (
    <section className="Weather">
      <p className="Weather__update">
        {wheatherTemp} {handleToggleSwitchChange()}
      </p>
      <img
        className="Weather__updatebg"
        src={weatherImageSrcUrl}
        alt="weather"
      />
    </section>
  );
};
export default WeatherCard;
