import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import Login from '../Login/Login';


const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <>
      <section className="navBarSection">
        <div className="header">
          <div className="logoDiv">
            <Link to="/" className="logo">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </Link>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/" className="navLink">
                  Home
                </Link>
              </li>

              <li className="navItem">
                <Link to="/destiny" className="navLink">
                  Destinations
                </Link>
              </li>

              <li className="navItem">
                <Link to="/pack" className="navLink">
                  Packages
                </Link>
              </li>

              <li className="navItem">
                <Link to="/visa" className="navLink">
                  Apply for eVisa
                </Link>
              </li>

              <div className="headerBtns flex">
                <Link to="/login" className="btn loginBtn">
                  Login
                </Link>
                <button className="btn loginBtn">
                  <Link to="/signup">Sign Up</Link>
                </button>
              </div>
            </ul>

            <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </div>
      </section>
      {showLoginPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-popup" onClick={toggleLoginPopup}>
              &times;
            </button>
            <Login setShowLoginPopup={toggleLoginPopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
