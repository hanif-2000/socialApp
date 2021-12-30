import {GUESTUSER, ISLOGGED, GOOGLESIGNIN} from '../types';
import axios from 'axios';

export function isLogged(data) {
  return {
    type: ISLOGGED,
    payload: data,
  };
}

export function registerUser(data) {
  return {
    type: GUESTUSER,
    payload: data,
  };
}
export function googleSignIn(data) {
  return {
    type: GOOGLESIGNIN,
    payload: data,
  };
}

export function requestForRegister(data) {
  return async function (dispatch) {
    axios({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + global.accessToken,
      },
    })
      .then(function (response) {
        console.warn(response.data);
        dispatch(registerUser(response.data));
      })
      .catch(error => {
        console.warn('specialofferDetail:-', error.response.data);
        dispatch(registerUser());
      });
  };
}

export function requestforGoogleSignIn(data) {
  return async function (dispatch) {
    dispatch(googleSignIn(data));
  };
}
