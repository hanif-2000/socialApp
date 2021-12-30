import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/HomeReducer';
import UserReducer from './reducers/UserReducer';

const appReducer = combineReducers({
  home: homeReducer,
  user: UserReducer,
});

const configureStore = () => {
  return createStore(appReducer, applyMiddleware(thunk));
};
export default configureStore;
