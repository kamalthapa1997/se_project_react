import "./WheatherCard.css";
import { wheatherOptions } from "../../utils/constant";

const WheatherCard = ({ day, type, wheatherTemp = "" }) => {
  const weatherOption = wheatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const weatherImageSrcUrl = weatherOption?.url || "";

  return (
    <section className="Weather">
      <p className="Weather__update">{wheatherTemp}&deg;F</p>
      <img className="Weather__updatebg" src={weatherImageSrcUrl} />
    </section>
  );
};
export default WheatherCard;
