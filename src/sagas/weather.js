import { call, put, takeLatest } from 'redux-saga/effects';
import weatherActions, { Types } from '@Actions/weather';
import getWeatherData from '@Services/weather';

export function* weatherRequest(action) {
  try {
    const { payload } = action;
    const response = yield call(getWeatherData, payload);
    yield put(weatherActions.getWeatherDataSuccess({ data: response.data }));
  } catch (error) {
    yield put(weatherActions.getWeatherDataFailure());
  }
}

function* weatherWatcher() {
  yield takeLatest(Types.WEATHER_REQUEST, weatherRequest);
}

export default weatherWatcher;
