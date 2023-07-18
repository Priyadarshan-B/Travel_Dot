import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login1.css'; 

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(e);

    axios
      .post('http://localhost:3002/login', { name, password })
      .then((response) => {
        const { data } = response;
        if (data === 'Success') {
          setUsername(name);
          setShowPopup(true);
          navigate('/login1');
        } else {
          setErrorMessage('Invalid Username or Password');
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('An error occurred');
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <center>
          <h2>Login</h2>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          {errorMessage && (
            <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>
          )}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <br />
        <p>Don't Have An Account</p>
        <Link
          to="/signup"
          className="btnsign btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Signup
        </Link>
      </div>
      {showPopup && (
        <div className="popup">
          <p> Login Successfull</p>
          <button onClick={() => navigate('/booking')} className="btn btn-primary">
            Go to Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;