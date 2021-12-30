import {GUESTUSERS, GUESTUSER, LOGOUT, GOOGLESIGNIN, ISLOGGED} from '../types';
const initialState = {
  isLoggedIn: false,
  userInfo: {},
  googleUserInfo: {},
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESTUSERS:
      return {...state, userInfo: action.payload};
    case ISLOGGED:
      return {...state, isLoggedIn: action.payload};
    case GOOGLESIGNIN:
      return {...state, googleUserInfo: action.payload};
    default:
      return state;
  }
};

export default UserReducer;
