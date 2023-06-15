import React from 'react';
import Hotels from './Hotels';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Bookings from './Bookings';
import './main.css';

export default function Main() {
  return (
    <div className="mainContainer">
      <div className="mainHeader">
        <div className="header_icon">
          <img
            width="100"
            height="60"
            src="https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo.png"
          />
        </div>
        <div className="header-links">
          <NavLink
            activeClassName="is-active"
            to="/home/hotels"
            className="header_link"
          >
            Hotels
          </NavLink>
          <NavLink
            activeClassName="is-active"
            to="/home/bookings"
            className="header_link"
          >
            Bookings
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/" element={<Hotels />} />
      </Routes>
    </div>
  );
}
