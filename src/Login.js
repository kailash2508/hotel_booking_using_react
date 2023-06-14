import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from './redux/actions/action';

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
    navigate('/home');
  }
  return (
    <div className="login_form">
      <h1>Login</h1>
      <input
        className="login_input"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <input
        className="login_input"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="Enter Password"
      />
      <button className="login_btn" onClick={login_check}>
        Submit
      </button>
    </div>
  );
};

export default Login;
