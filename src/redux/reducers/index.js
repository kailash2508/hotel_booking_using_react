import { combineReducers } from 'redux';
import userReducer, { hotelReducer } from './reducer';

export const reducers = combineReducers({
  allUsers: userReducer,
  allHotels: hotelReducer,
});
