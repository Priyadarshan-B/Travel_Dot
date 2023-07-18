import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { emailValidator, passwordValidator, nameValidator } from './components/regexValidator';
import { UserContext } from '../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameValidator(name)) {
      setErrorMessage('Username should contain a minimum of 8 characters with the combinations of A-Z, a-z, 0-9, and no special characters');
      return;
    }
    if (!emailValidator(email)) {
      setErrorMessage('Please enter a valid Email ID');
      return;
    }
    if (!passwordValidator(password)) {
      setErrorMessage(
        'Password should have a minimum of 8 characters with the combination of A-Z, a-z, 0-9, and special characters'
      );
      return;
    }

    axios
      .post('http://localhost:3002/signup', { name, dob, email, password })
      .then((result) => {
        console.log(result);
        setUsername(name); // Set the username in UserContext
        setShowPopup(true);
        navigate('/signup');
      })
      .catch((err) => console.log(err));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <center><h2>Register</h2></center><br/>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateofbirth">
             Date of Birth
            </label>
            <input
              type="date"
              placeholder="Enter your DOB"
              autoComplete="off"
              name="dob"
              className="form-control rounded-0"
              required
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
             Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
             Password
            </label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <button type="submit" className="btnsign btn-success w-100 rounded-0">
            Register
          </button>
          {errorMessage && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
        </form><br/>
        <p className='slet'>Already Have An Account</p>
        <Link to="/login" className="btnsign btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>
      </div>
      {showPopup && (
        <div className="popup">
          <p> Registered Successfully</p>
          <button onClick={() => navigate('/home')} className="btnsign btn-primary">
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;
