import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from './redux/actions/action';
import './login.css';
const Login = () => {
  const [user, setUser] = useState('Kailash');
  const [pass, setPass] = useState('test123');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.allUsers.logged_user);
  const login_check = () => {
    dispatch(userLogin([user, pass]));
  };
  if (selector.length === 1) {
    navigate('/home/hotels');
  }
  return (
    <div className="login_screen">
      <div className="header_icon">
        <img
          width="100"
          height="60"
          src="https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo.png"
        />
      </div>
      <div className="login_form">
        <h1>Login</h1>
        <div className="input_box">
          <img
            className="input_img"
            width="20"
            height="20"
            src="https://img.icons8.com/fluency-systems-filled/48/user.png"
            alt="user"
          />
          <input
            className="login_input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="input_box">
          <img
            className="input_img"
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/24/lock-2.png"
            alt="lock-2"
          />
          <input
            className="login_input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <button className="login_btn" onClick={login_check}>
          Login Now
        </button>
      </div>
    </div>
  );
};

export default Login;
