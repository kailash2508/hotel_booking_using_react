import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { bookHotels } from './redux/actions/action';
import './hotel.css';

export default function Hotels() {
  const userDetail = useSelector((state) => state.allUsers.logged_user);
  const hotels = useSelector((state) => state.allHotels.hotels);

  const date = new Date();
  const x = `${date.getFullYear()}-${
    date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  }-${date.getDate() > 10 ? date.getDate() : '0' + date.getDate()}`;
  const y = `${date.getFullYear()}-${
    date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  }-${date.getDate() > 10 ? date.getDate() + 1 : '0' + date.getDate() + 1}`;
  const [from, setFrom] = useState(x);
  const [to, setTo] = useState(y);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var booking = useSelector((state) => state.allHotels.user_bookings);
  const book = (id) => {
    console.log(id, userDetail[0].id);
    let hotel = hotels.filter((obj) => obj.id === id);
    dispatch(
      bookHotels([
        booking.length ,
        userDetail[0].id,
        userDetail[0].username,
        id,
        hotel[0].name,
        hotel[0].price,
        from,
        to,
      ])
    );
    navigate('/home/bookings');
  };
  const Hotel = () => {
    return hotels.map((hot) => {
      return (
        <div className="hotel_card">
          <img
            width="275"
            height="200"
            src={hot.image === 'hotel_imag' ? hot.image : hot.image}
          />
          <h2>{hot.name}</h2>
          <h3 className="hotel_price">{hot.price}</h3>
          <button
            className="book_btn"
            onClick={() => {
              book(hot.id);
            }}
          >
            Book
          </button>
        </div>
      );
    });
  };
  useEffect(() => {
    if (!userDetail[0]) {
      navigate('/');
    }
  }, [userDetail[0]]);
  return (
    <div className="hotelContainer">
      <div className="date">
        <div className="date_from">
          From:
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            type="date"
          />
        </div>
        <div className="date_to">
          To:
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            type="date"
          />
        </div>
      </div>
      <div className="hotel">{Hotel()}</div>
    </div>
  );
}
