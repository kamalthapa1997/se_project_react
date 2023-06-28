import { latitude, longitude, APIkey } from "./constant";
const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getWeatheraForecast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);

  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;

  const temperature = main && main.temp;

  return Math.ceil(temperature);
};
export const parseWeatherPlace = (data) => {
  const main = data.name;
  return main;
};
