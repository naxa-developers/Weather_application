import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/weather';

const initialState = {
  loading: false,
  weatherdata: {},
};

const getWeatherDataRequest = (state) => ({ ...state, loading: true });

const getWeatherDataSuccess = (state, action) => {
  return { ...state, loading: false, weatherdata: action.payload.data };
};

const getWeatherDataFailure = (state) => ({
  ...state,
  loading: false,
});

const weatherReducer = createReducer(initialState, {
  [Types.GET_WEATHER_DATA_REQUEST]: getWeatherDataRequest,
  [Types.GET_WEATHER_DATA_SUCCESS]: getWeatherDataSuccess,
  [Types.GET_WEATHER_DATA_FAILURE]: getWeatherDataFailure,
});

export default weatherReducer;
