import { ActionTypes } from '../constants/actionTypes';
const initialstate = {
  users: [],
  logged_user: [],
};
const hotelstate = {
  hotels: [],
  user_bookings: [
    [
      'Booking Id',
      'User Id',
      'User Name',
      'Hotel Id',
      'Hotel Name',
      'Price',
      'From',
      'To',
    ],
  ],
};
const userReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    case ActionTypes.USER_LOGIN:
      const userLogged = state.users.filter(
        (obj) => obj.username === payload[0] && obj.password === payload[1]
      );
      return { ...state, logged_user: userLogged };
    default:
      return state;
  }
};
export const hotelReducer = (state = hotelstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HOTELS:
      return { ...state, hotels: payload };
    case ActionTypes.BOOK_HOTELS:
      let x = state.user_bookings;
      let y = x.push(payload);
      console.log(y, x);
      return { ...state, user_bookings: x };
    default:
      return state;
  }
};
export default userReducer;
