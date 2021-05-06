/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './weather.scss';
import { Creators } from '@Actions/weather';

import { useDispatch, useSelector } from 'react-redux';

const Weatherapp = () => {
  // const [weatherdata, setWeatherdata] = useState(null);

  const [location, setLocation] = useState('kathmandu');
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [filteredcWeather, setFilteredcWeather] = useState([]);

  const { getWeatherDataRequest } = Creators;

  const getData = (cityname) => {
    // console.log(location);
    setLocation(cityname);
    dispatch(getWeatherDataRequest(cityname));
  };

  const climate = useSelector((state) => state.weather.weatherdata);
  console.log(climate);
  console.log(climate?.list?.[0]);

  useEffect(() => {
    console.log('climate', climate);
    const filterClimate = climate?.list?.filter((city) => {
      return city.name.toLowerCase().includes(location.toLowerCase());
    });
    setFilteredcWeather(filterClimate);

    console.log('setFiltered', filterClimate);
  }, [climate, location]);

  const listItems = climate?.list?.map((weather) => (
    <div key={weather.id}>
      <div className="location">
        <h3>
          <i className="fa fa-street-view" /> {weather.name}, {weather.sys.country}
        </h3>
      </div>
      <div className="temperature">
        <h1>
          <div className="weather-icon">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="imgicon" />
            {weather.main.temp}°C
          </div>
        </h1>
      </div>
      <div className="feellike">
        <h4>
          Feels like {weather.main.feels_like}°C. {weather.weather[0].description} {weather.weather[0].main}
        </h4>
      </div>
      <div className="pressure">
        <i className="fas fa-location-arrow" /> {weather.wind.speed}m/s N .
        <i className="far fa-compass" />
        {weather.main.pressure}hPa
      </div>
      <div className="temperature-range">
        <h6>
          Min: {weather.main.temp_min} °C || Max: {weather.main.temp_max} °C || Humadity: {weather.main.humidity}%
        </h6>
      </div>
      <div className="dew">Dew point: 17°C Visibility: 5.0km</div>
    </div>
  ));

  return (
    <>
      <div className="Whole">
        <div className="card">
          <h2 className="title">
            <i className="fa fa-cloud"> </i>Weather App
          </h2>
        </div>
        <div className="search-form">
          <input
            type="text"
            onChange={(e) => getData(e.target.value)}
            value={location}
            placeholder="Weather in your city"
          />

          <button type="button" onClick={() => getData()}>
            Search
          </button>
        </div>

        {/* {weatherdata !== null ? ( ) : null} */}
        <div className="main-container">
          {/* {setWeatherdata} */}
          <h4>Live Weather Condition</h4>

          {/* {weatherdata} */}

          {listItems}
        </div>
      </div>
    </>
  );
};

export default Weatherapp;
