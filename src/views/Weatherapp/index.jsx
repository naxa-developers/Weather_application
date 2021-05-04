/* eslint-disable no-console */
import React, { useState } from 'react';
import './weather.scss';
import { Creators } from '@Actions/weather';

import { useDispatch, useSelector } from 'react-redux';

const Weatherapp = () => {
  // const [weatherdata, setWeatherdata] = useState(null);
  const [location, setLocation] = useState('kathmandu');
  const dispatch = useDispatch();

  const { getWeatherDataRequest } = Creators;

  const getData = async () => {
    // console.log(location);
    dispatch(getWeatherDataRequest(location));
  };

  const climate = useSelector((state) => state.weather.weatherdata);
  console.log(climate);
  console.log(climate?.list?.[0]);

  const listItems = climate?.list?.map((weather) => (
    <>
      <div className="location">
        <h3>
          <i className="fa fa-street-view" /> {weather.name}, {weather.sys.country}
        </h3>
      </div>
      <div className="temperature">
        <h1>
          <i className="fas fa-water" /> {weather.main.temp}°C
        </h1>
      </div>

      <div className="feellike">
        <h4>
          Feels like {weather.main.feels_like}°C. {weather.weather[0].description}. {weather.weather[0].main}
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
    </>
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
          <div className="weather-icon">
            <i className="fa fa-sun" />
          </div>
          {/* {weatherdata} */}

          {listItems}
        </div>
      </div>
    </>
  );
};

export default Weatherapp;
