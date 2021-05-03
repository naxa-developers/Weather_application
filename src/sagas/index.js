import { all } from 'redux-saga/effects';
import loginWatcher from './login';
import registerWatcher from './register';
import weatherWatcher from './weather';

function* rootSaga() {
  yield all([loginWatcher(), registerWatcher(), weatherWatcher()]);
}

export default rootSaga;
