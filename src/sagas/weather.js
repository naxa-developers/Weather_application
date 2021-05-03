import { call, put, takeLatest } from 'redux-saga/effects';
import weatherActions, { Types } from '@Actions/weather';
import getWeatherData from '@Services/weather';

export function* weatherRequest(action) {
  try {
    const { location } = action;
    const response = yield call(getWeatherData, location);
    yield put(weatherActions.getWeatherDataSuccess({ data: response.data }));
  } catch (error) {
    yield put(weatherActions.getWeatherDataFailure());
  }
}

function* weatherWatcher() {
  yield takeLatest(Types.GET_WEATHER_DATA_REQUEST, weatherRequest);
}

export default weatherWatcher;
