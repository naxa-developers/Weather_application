import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getWeatherDataRequest: ['cityname'],
  getWeatherDataSuccess: ['payload'],
  getWeatherDataFailure: ['payload'],
});

export default Creators;
