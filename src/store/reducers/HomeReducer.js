import {GUESTUSERS, GUESTUSER, LOGOUT, ISLOGGED} from '../types';

const initialState = {
  isLoggedOut: false,
  users: {},
};
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESTUSERS:
      return {...state, users: action.payload};
    case LOGOUT:
      return {...state, isLoggedOut: action.payload};

    default:
      return state;
  }
};

export default HomeReducer;
