import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/weather';

const initialState = {
  loading: false,
  weatherdata: {},
};

const WeatherRequest = (state) => ({ ...state, loading: true });

const WeatherSuccess = (state, action) => {
  return { ...state, loading: false, weatherdata: action.payload.data };
};

const WeatherFailure = (state) => ({
  ...state,
  loading: false,
});

const weatherReducer = createReducer(initialState, {
  [Types.WEATHER_REQUEST]: WeatherRequest,
  [Types.WEATHER_SUCCESS]: WeatherSuccess,
  [Types.WEATHER_FAILURE]: WeatherFailure,
});

export default weatherReducer;
