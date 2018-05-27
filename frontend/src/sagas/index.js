/* eslint-disable no-constant-condition */

import { fork, all } from 'redux-saga/effects';
import { loginSaga, logoutSaga } from './login';

export default function* root() {
    yield all([
        fork(loginSaga),
        fork(logoutSaga)
      ])
  }