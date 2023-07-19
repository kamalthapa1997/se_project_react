import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constant";

const WeatherCard = ({ day, type, wheatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const weatherImageSrcUrl = weatherOption?.url || "";

  return (
    <section className="Weather">
      <p className="Weather__update">{wheatherTemp}</p>
      <img className="Weather__updatebg" src={weatherImageSrcUrl} />
    </section>
  );
};
export default WeatherCard;
