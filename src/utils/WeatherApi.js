const latitude = 51.485927;
const longitude = 0.24995;
const APIkey = "b6a1d1deb8601a340db0f9a5af50aa24";

export const getWeatheraForecast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });

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
