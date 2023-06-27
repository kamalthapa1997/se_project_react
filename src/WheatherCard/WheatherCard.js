import "./WheatherCard.css";

import sunnyDay from "../images/day/sunnyDay.svg";
import fogDay from "../images/day/fogDay.svg";
import rainDay from "../images/day/rainDay.svg";
import snowDay from "../images/day/snowDay.svg";
import stromDay from "../images/day/stromDay.svg";
import cloudyDay from "../images/day/cloudyDay.svg";
import cloudyNighy from "../images/night/cloudyNight.svg";
import sunnyNighy from "../images/night/sunnyNight.svg";

const WheatherOptions = [
  { url: sunnyDay, type: "sunny", day: true },
  { url: fogDay, type: "fog", day: true },
  { url: rainDay, type: "rain", day: true },
  { url: snowDay, type: "snow", day: true },
  { url: stromDay, type: "strom", day: true },
  { url: cloudyDay, type: "cloudy", day: true },
  { url: cloudyNighy, type: "cloudy", day: false },
  { url: sunnyNighy, type: "sunny", day: false },
];

const WheatherCard = ({ day, type, wheatherTemp = "" }) => {
  const weatherImageSrc = WheatherOptions.filter((item) => {
    return item.day === day && item.type === type;
  });

  const weatherImageSrcUrl = weatherImageSrc[0].url || "";

  return (
    <section className="Weather">
      <p className="Weather__update">{wheatherTemp}&deg;F</p>
      <img className="Weather__updatebg" src={weatherImageSrcUrl} />
    </section>
  );
};
export default WheatherCard;
