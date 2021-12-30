import {GUESTUSERS, ISLOGGED} from '../types';
import axios from 'axios';

export function isLogged(data) {
  return {
    type: ISLOGGED,
    payload: data,
  };
}

export function guestUsers(data) {
  return {
    type: GUESTUSERS,
    payload: data,
  };
}

export function requestForGuestUsers() {
  return async function (dispatch) {
    axios({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + global.accessToken,
      },
    })
      .then(function (response) {
        dispatch(guestUsers(response.data));
      })
      .catch(error => {
        console.warn('specialofferDetail:-', error);
        dispatch(guestUsers());
      });
  };
}

// export function requestForGuestUser() {
//   axios
//     .get('https://reqres.in/api/users?page=2')
//     .then(response => {
//       // console.warn(response.data);
//       guestUser(response.data);
//     })
//     .catch(error => {
//       console.warn('error : ', error);
//     });
// }
// export function forceLogin(forceLoginFrom) {
//   return {
//     type: FORCELOGINFROM,
//     payload: forceLoginFrom,
//   };
// }
