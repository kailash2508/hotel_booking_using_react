import { ActionTypes } from '../constants/actionTypes';
export const setUsers = (Users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: Users,
  };
};
export const setHotels = (hotels) => {
  return {
    type: ActionTypes.SET_HOTELS,
    payload: hotels,
  };
};
export const userLogin = (user) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload: user,
  };
};
export const bookHotels = (bookingdetails) => {
  return {
    type: ActionTypes.BOOK_HOTELS,
    payload: bookingdetails,
  };
};
