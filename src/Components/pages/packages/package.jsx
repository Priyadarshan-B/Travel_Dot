import React from 'react';
import './package.css';
import Navbar from '../../Navbar1/Navbar';
import Footer from '../../Footer/Footer';
import '../../Popular/popular.css';
import '../../../app.css';
// import { BsArrowRightShort } from 'react-icons/bs';
// import { MdLocationOn } from 'react-icons/md';
// import { BsPersonFill } from 'react-icons/bs';
// import { GiDuration } from 'react-icons/gi';
// import { MdModeOfTravel } from 'react-icons/md';
// import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
// import img from '../../../Assests/Baga/b1.jpg';

const Packages = () => {


  const result = () => {
    window.search(); // Call the function defined in index.html
  };



  // const Offer = [
  //   {
  //     per: 'Ulimated',
  //     off: 28,
  //     duration: 5,
  //     mode: 'Train',
  //     imgSrc: img,
  //     location: 'Ooty',
  //     price: '8219',
  //     tag: '/',
  //   },
  //   {
  //     per: 'Ulimated',
  //     off: 15,
  //     duration: 3,
  //     mode: 'Flight',
  //     imgSrc: img,
  //     location: 'Goa',
  //     price: '7635',
  //     tag: '/',
  //   },
  //   {
  //     per: 'Ulimated',
  //     off: 35,
  //     duration: 4,
  //     mode: 'Van',
  //     imgSrc: img,
  //     location: 'Ladakh',
  //     price: '5899',
  //     tag: '/',
  //   },
  //   {
  //     per: 'Ulimated',
  //     off: 20,
  //     duration: 5,
  //     mode: 'Train',
  //     imgSrc: img,
  //     location: 'Coorg',
  //     price: '9999',
  //     tag: '/',
  //   },
  // ];

return (
    <>
      <Navbar />

      <section className="pack">
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">
              Plan Your Trip With Travel Dot
            </h1>

            <p className="subTitle">
              Travel to your favourite city with respectful of the environment!
            </p>

            <button className="btn">
              <Link to="/destiny">Explore Now</Link>
            </button>
          </div>

          <div className="homeCard grid">
            <div className="locationDiv">
              <label htmlFor="location">Source</label>
              {/* <input id="src" type="text" placeholder="Source" required /> */}
              <div class="select">
                <select id="src" name='location'>
                  <option value="">Source</option>
                  <option value="salem">salem</option>
                  <option value="erode">erode</option>
                  <option value="chennai">chennai</option>
                  <option value="hyderabad">hyderabad</option>
                  <option value="bengaluru">bengaluru</option>
                  <option value="mumbai">mumbai</option>
                  <option value="kolkata">kolkata</option>
                  <option value="coimbatore">coimbatore</option>
                  <option value="kochi">kochi</option>
                  <option value="madurai">madurai</option>
                  <option value="kanyakumari">kanyakumari</option>
                  <option value="goa">goa</option>
                  <option value="jaipur">jaipur</option>
                  <option value="patna">patna</option>
                  <option value="mysore">mysore</option>
                  <option value="lucknow">lucknow</option>
                </select>
                <span class="focus"></span>
              </div>
            </div>

            <div className="distDiv">
              <label htmlFor="distance">Destination</label>
              {/* <input id="des" type="text" placeholder="Dream Destination" required /> */}
              <div class="select">
                <select id="des" name='distance'>
                  <option value="">Destination</option>
                 <option value="tajmahal">tajmahal</option>
                  <option value="munnar">munnar</option>
                  <option value="redfort">redfort</option>
                  <option value="mysore palace">mysore palace</option>
                  <option value="charminar">charminar</option>
                  <option value="gateway of india">gateway of india</option>
                  <option value="ladakh">ladakh</option>
                  <option value="baga beach">baga beach</option>
                  <option value="ooty">ooty</option>
                  <option value="kodikanal">kodikanal</option>
                  <option value="shimla">shimla</option>
                  <option value="tanjore">tanjore</option>
                  <option value="tirupati">tirupati</option>
                  <option value="kedarnath">kedarnath</option>
                  <option value="kovalam">kovalam</option>
                  <option value="varkala">varkala</option>
                  <option value="radhanagar">radhanagar</option>
                </select>
                <span class="focus"></span>
              </div>
            </div>

            <div className="priceDiv">
              <label htmlFor="persons">Person</label>
              <div class="select">
                <select id="persons" name='persons' required>
                  <option value="">select person</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <span class="focus"></span>
              </div>
            </div>
            <div className="priceDiv">
              <label htmlFor="days">Days</label>
              {/* <input id="days" type="number" placeholder="1-5" min={1} max={5} required /> */}
              <div class="select">
                <select id="days" name='days'>
                  <option value="">Select Days</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <span class="focus"></span>
              </div>
              </div>
              <div className="sear">
            <button onClick={result}  id="search" className="btn">
              Search
            </button></div>
          </div>
        </div>
      </section>

<section className="offer container section">
      <div className="secContainer">
        <div id='heading' className="secIntro ">
          {/* <h2 className="secTitle">Packages</h2> */}
        </div>

        <div id='offerlist' className="mainContent grid ">
          {/* {Offer.map(({ off, duration, mode, imgSrc, per, location, price }) => {
            const originalPrice = parseInt(price);
            const discountedPrice = originalPrice - (originalPrice * off) / 100;

            return (
              <div className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt="{destTitle}" />
                  <span className="discount">{off}% Off</span>
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
          })} */}
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
};

export default Packages;
