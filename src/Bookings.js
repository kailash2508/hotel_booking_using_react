import React from 'react';
import { useSelector } from 'react-redux';

export default function Bookings() {
  const bookings = useSelector((state) => state.allHotels.user_bookings);
  const x = () => {
    return bookings.map((element) => {
      return element.map((a) => <div>{a}</div>);
    });
  };
  return <div className="booking_table">{x()}</div>;
}
