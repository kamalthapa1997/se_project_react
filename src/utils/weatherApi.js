import { processResponse } from "./Api";
import { latitude, longitude, APIkey } from "./constant";

export const getWeatheraForecast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processResponse);

  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;

  const weather = {
    temperature: {
      F: `${Math.round(temperature)}°`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}°`,
    },
  };

  return weather;
};
export const parseWeatherPlace = (data) => {
  const main = data.name;
  return main;
};
