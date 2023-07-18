import React from 'react';
import './offers.css';
import { Link } from 'react-router-dom';

import { BsPersonFill } from 'react-icons/bs';
import { GiDuration } from 'react-icons/gi';
import { MdModeOfTravel } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';

import img from '../../Assests/bg1.jpg';
import img1 from '../../Assests/HI/q6.jpg';
import img2 from '../../Assests/HI/q7.jpg';
import img3 from '../../Assests/HI/q8.jpg';
import img4 from '../../Assests/HI/q9.jpg';

const Offer = [
  {
    per: 'Ulimated',
    off: 28,
    duration: 5,
    mode: 'Train',
    imgSrc: img1,
    location: 'chennai to Ooty',
    price: '8219',
    tag: '/',
  },
  {
    per: 'Ulimated',
    off: 15,
    duration: 3,
    mode: 'Train',
    imgSrc: img2,
    location: 'Bengaluru to Goa',
    price: '7635',
    tag: '/',
  },
  {
    per: 'Ulimated',
    off: 35,
    duration: 4,
    mode: 'Van',
    imgSrc: img3,
    location: 'Mumbai to Ladakh',
    price: '5899',
    tag: '/',
  },
  {
    per: 'Ulimated',
    off: 20,
    duration: 5,
    mode: 'Train',
    imgSrc: img4,
    location: 'Kolkata to Coorg',
    price: '9999',
    tag: '/',
  },
];

const Offers = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Packages</h2>
          <p>From historical cities to natural specteculars, come see the best of the world!</p>
        </div>

        <div className="mainContent grid">
          {Offer.map(({ off, duration, mode, imgSrc, per, location, price }) => {
            const originalPrice = parseInt(price);
            const discountedPrice = originalPrice - (originalPrice * off) / 100;

            return (
              <div className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt="{destTitle}" />
                  
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>
                       ₹ {discountedPrice} <del className="canceled-price"> ₹ {originalPrice}</del>
                    </h4>
                    <span className="status">Special</span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <BsPersonFill className="icon" />
                      <small>{per}</small>
                    </div>
                    <div className="singleAmenity flex">
                      <GiDuration className="icon" />
                      <small>{duration} days</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdModeOfTravel className="icon" />
                      <small>{mode}</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>{location}</small>
                  </div>

                  <Link to="/booking">
                    <button className="btn flex">
                      Book
                      <BsArrowRightShort className="icon" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;