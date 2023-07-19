import sunnyDay from "../images/day/sunnyDay.svg";
import fogDay from "../images/day/fogDay.svg";
import rainDay from "../images/day/rainDay.svg";
import snowDay from "../images/day/snowDay.svg";
import stromDay from "../images/day/stromDay.svg";
import cloudyDay from "../images/day/cloudyDay.svg";
import cloudyNighy from "../images/night/cloudyNight.svg";
import sunnyNighy from "../images/night/sunnyNight.svg";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];
const latitude = 51.485927;
const longitude = 0.24995;
const APIkey = "b6a1d1deb8601a340db0f9a5af50aa24";
export { latitude, longitude, APIkey };

export const weatherOptions = [
  { url: sunnyDay, type: "sunny", day: true },
  { url: fogDay, type: "fog", day: true },
  { url: rainDay, type: "rain", day: true },
  { url: snowDay, type: "snow", day: true },
  { url: stromDay, type: "strom", day: true },
  { url: cloudyDay, type: "cloudy", day: true },
  { url: cloudyNighy, type: "cloudy", day: false },
  { url: sunnyNighy, type: "sunny", day: false },
];
