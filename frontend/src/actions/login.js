import { setAuthority, clearAuthority } from '../utils/authority';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export function loginRequest(success) {
    console.log('action===',success);
    return {
        type: LOGIN_REQUEST,
        success,
    }
}

export function loginSuccess(success) {
    console.log('action===',success);
    setAuthority('authority', 'admin')
    return {
        type: LOGIN_SUCCESS,
        success,
    }
}

export function loginFailure(error) {
    console.log('action===',error);
    return {
        type: LOGIN_FAILURE,
        error,
    }
}

export function logOut() {
    clearAuthority();
    return {
        type: LOG_OUT,
    }
}