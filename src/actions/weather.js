import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getWeatherDataRequest: ['location'],
  getWeatherDataSuccess: ['payload'],
  getWeatherDataFailure: null,
});

export default Creators;
