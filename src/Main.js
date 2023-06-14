import React from 'react';
import Hotels from './Hotels';
import { Link, Route, Routes } from 'react-router-dom';
import Bookings from './Bookings';

export default function Main() {
  return (
    <>
      <div>
        <Link to="/home/hotels" className="header_link">
          Hotels
        </Link>
        <Link to="/home/bookings" className="header_link">
          Bookings
        </Link>
      </div>
      <Routes>
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/" element={<Hotels />} />
      </Routes>
    </>
  );
}
