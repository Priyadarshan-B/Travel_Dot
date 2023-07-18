import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { UserContext } from '../UserContext';

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [transparent, setTransparent] = useState('header');
  const [showPopup, setShowPopup] = useState(false);
  const { name, setUsername } = useContext(UserContext); // Access the username from UserContext

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  };

  window.addEventListener('scroll', addBg);

  const handleLogout = () => {
    // Perform logout logic here
    setUsername(''); // Clear the username from the context
    setShowPopup(true); // Show the popup message
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup message
  };

  return (
    <>
      <section className="navBarSection">
        <div className={transparent}>
          <div className="logoDiv">
            <a href="#" className="logo">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/home" className="navLink">
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

              <li className='navItem'>
                <Link to="/visa" className='navLink'>Apply for eVisa</Link>
              </li>

              {name ? (
                <li className="navItem">
                  <span className="navLink">Welcome, {name}</span>
                </li>
              ) : (
                <div className="headerBtns flex">
                  <button className="btn loginBtn">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn loginBtn">
                    <Link to="/signup">Sign Up</Link>
                  </button>
                </div>
              )}

              {name && (
                <li className="navItem">
                  <button className="btn logoutBtn" onClick={handleLogout}>
                  <Link to="/">Logout</Link>
                  </button>
                </li>
              )}
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

      {showPopup && (
        <div className="popup">
          <div className="popupContent">
            <h3>Logout Successful</h3>
            <p>You have been logged out.</p>
            <button className="btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
