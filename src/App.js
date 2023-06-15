import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Bookings from './Bookings';
import users from './users.json';
import hotels from './hotels.json';
import { setUsers, setHotels } from './redux/actions/action';
import Main from './Main';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsers(users));
    dispatch(setHotels(hotels));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/home/*" element={<Main />} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
