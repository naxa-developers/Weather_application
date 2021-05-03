import React, { useEffect, useState } from 'react';
import './weather.scss';
import WeatherActions from '@Actions/weather';
import weatherWatcher from '@Sagas/weather';

import { connect, useDispatch } from 'react-redux';

const Weatherapp = () => {
  const [weatherdata, setWeatherdata] = useState(null);
  const [location, setLocation] = useState('kathmandu');
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);

  const getData = async () => {
    dispatch(weatherWatcher);
  };

  useEffect(() => {
    getData();
  });
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

// Weatherapp.propTypes = {
//   WeatherRequest: PropTypes.func.isRequired,
//   loading: PropTypes.bool.isRequired,
// };

const mapStateToProps = (state) => {
  const {
    weatherdata: { loading },
  } = state;
  return {
    loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  WeatherRequest: (payload) => dispatch(WeatherActions.WeatherRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weatherapp);
