/* eslint-disable no-constant-condition */

import { take, put, call, fork, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { routerReducer, routerActions, push  } from 'react-router-redux'
import { loginSuccess, loginFailure, logOut } from '../actions/login'
import login from '../reducers/login'
import { api } from '../services/api'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

function* auth({ payload, callback }) {
  try {
    const response = yield call(api.login, payload);
    yield put(loginSuccess(payload))
    // Login successfully
    if (response.status === 'success') {
      if(callback) callback();
      //yield put(routerActions.push('/'));
    }
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function* logoutFlow({callback}) {
  console.log(1111)
  try {
    const response = yield call(api.logout);
    yield put(logOut())
      // logout successfully
      if (response.status === 'success') {
        if(callback) callback();
      }
    return response
    } catch (error) {
    
  }
}

export function* loginSaga() {
  yield takeLatest('LOGIN_REQUEST', auth);
}

export function* logoutSaga() {
  while (true) {
    const response = yield take('LOG_OUT')
    const { callback } = response
    yield call(logoutFlow, {callback})
  }
}
