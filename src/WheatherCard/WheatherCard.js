import "./WheatherCard.css";
const WheatherOptions = [
  { url: "/images/day/sunnyDay.svg", type: "sunny", day: true },
  { url: "/images/day/fogDay.svg", type: "fog", day: true },
  { url: "/images/day/rainDay.svg", type: "rain", day: true },
  { url: "/images/day/snowDay.svg", type: "snow", day: true },
  { url: "/images/day/stromDay.svg", type: "strom", day: true },
  { url: "/images/day/cloudyDay.svg", type: "cloudy", day: true },
  { url: "/images/day/cloudyNighy.svg", type: "cloudy", day: false },
  { url: "/images/day/sunnyNighy.svg", type: "sunny", day: false },
];

const WheatherCard = ({ day, type, wheatherTemp = "" }) => {
  const weatherImageSrc = WheatherOptions.filter((item) => {
    return item.day === day && item.type === type;
  });
  console.log(weatherImageSrc[0].url);
  const weatherImageSrcUrl = weatherImageSrc[0].url || "";

  return (
    <section className="Weather">
      <div className="Weather__update">{wheatherTemp}</div>
      <img className="Weather__updatebg" src={weatherImageSrcUrl} />
    </section>
  );
};
export default WheatherCard;
