import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import './book.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { emailValidator } from './components/regexValidator';


const Signup = () => {
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [des, setDes] = useState('');
  const [email1, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const [persons, setPerson] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);



  const form = useRef();

  
  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailValidator(email1)) {
      setErrorMessage('Please enter a valid Email ID');
      return;
    }

    emailjs.sendForm('service_gw5p4c1', 'template_won0kmb', form.current, '6fbMjgwjAr98Kv3CJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    axios
      .post('http://localhost:3002/booking', { name, src, des, email1, age, gender, address, number, persons })
      .then((result) => {
        console.log(result);
        navigate('/booking');
        setShowPopup(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="bgimg">
    <div className="registration-form">
    <center>
    <h2>Registration Form</h2></center>
    <br/>
    <form ref={form} onSubmit={handleSubmit}>
      
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="first-name" placeholder='Your Name' name="name" required onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="form-group">
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
        {/* <label htmlFor="src">Source</label>
        <input type="text" id="last-name" name="src" placeholder='Source'  required onChange={(e)=>setSrc(e.target.value)}  /> */}
      </div>
      <div className="form-group">
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
        {/* <label htmlFor="des">Destination</label>
        <input type="text" id="city" name="des" placeholder='Your Dream Destination'  required onChange={(e)=>setDes(e.target.value)}  /> */}
      </div>
      <div className="form-group">
        <label htmlFor="email1">Email</label>
        <input type="email" id="email" name="email1" placeholder='Your Email Id'  required onChange={(e)=>setEmail(e.target.value)}  />
      </div>
      <div className="form-group">
        <label htmlFor="number">Phone</label>
        <input type="tel" id="phone" name="number" placeholder='Your Phone Number'  pattern="[0-9]{10}" required onChange={(e)=>setNumber(e.target.value)}  />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder='Your Address'  required onChange={(e)=>setAddress(e.target.value)}  />
      </div>
      <div className="form-group">
        <label htmlFor="person">Person</label>
        <select id="state" name="person" required  onChange={(e)=>setPerson(e.target.value)} >
          <option value="">Select Person</option>
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
      </div>
      <div className="form-group">
        <label htmlFor="age">Days</label>
        <select id="state" name="age" required  onChange={(e)=>setAge(e.target.value)} >
          <option value="">Select Days</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      {/* <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select id="state" name="gender" required  onChange={(e)=>setGender(e.target.value)} >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div> */}
      <button type='submit' className='btn btn-success w-100 rounded-0'>Book</button>
      {errorMessage && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
      {showPopup && (
        <div className="popup">
          <p> Booked Successfully</p>
          <button onClick={() => navigate('/home')} className="btnsign btn-primary">
            Go to Home
          </button>
        </div>
      )}
    </form>
  </div>
  </div>
  );
};
export default Signup;