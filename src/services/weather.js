import { api } from './index';

const getWeatherData = (cityname) =>
  api.get(
    `http://api.openweathermap.org/data/2.5/find?q=${cityname}&units=metric&appid=c0679a48cef8047ed9698495ddce46c4`,
  );

export default getWeatherData;
