/* eslint-disable no-console */
import React, { useState } from 'react';
import './weather.scss';
import { Creators } from '@Actions/weather';

import { useDispatch, useSelector } from 'react-redux';

const Weatherapp = () => {
  const [weatherdata, setWeatherdata] = useState(null);
  const [location, setLocation] = useState('kathmandu');
  const dispatch = useDispatch();

  const { getWeatherDataRequest } = Creators;

  const getData = async () => {
    console.log(location);
    dispatch(getWeatherDataRequest(location));
  };

  const climate = useSelector((state) => state.weather.weatherdata);
  console.log(climate);
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

        {weatherdata !== null ? (
          <div className="main-container">
            {setWeatherdata}
            <h4>Live Weather Condition</h4>
            <div className="weather-icon">
              <i className="fa fa-sun" />
            </div>
            <h3>Sunny</h3>
            {/* useSelector */}
            {climate}
            <div className="temperature">
              <h1>28 & deg;C</h1>
            </div>
            <div className="location">
              <h3>
                <i className="fa fa-street-view" />
                Kathmandu | Nepal
              </h3>
            </div>
            <div className="temperature-range">
              <h6>Min: 25&deg;C || 28&deg;C || Humadity: 68% </h6>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Weatherapp;
