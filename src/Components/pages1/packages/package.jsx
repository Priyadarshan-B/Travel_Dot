import React, {useEffect, useState} from 'react'
import './package.css'
import Navbar from '../../Navbar1/Navbar'
import Footer from '../../Footer/Footer'
import '../../Popular/popular.css'
import '../../../app.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {BsPersonFill} from 'react-icons/bs'
import {GiDuration} from 'react-icons/gi'
import {MdModeOfTravel} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import img from '../../../Assests/Baga/b1.jpg'



const packages = () => {

    const [active, setActive] = useState('navBar')
    const showNav =()=>{
      setActive('navBar activeNavbar')
    }
  
    //code to remove Navbar
    // const button =()=>{
    //   alert("Button");
    // }
    const removeNav =()=>{
      setActive('navBar')
    }
  
    useEffect(()=>{
      Aos.init({duration:2000})
    })
  
  
  
    const [transparent, setTransparent] = useState('header')
    const addBg = ()=>{
      if(window.scrollY >=10){
        setTransparent('header activeHeader')
      }
      else{
        setTransparent('header')
      }
    }
    window.addEventListener('scroll', addBg)
  
  
  
  
const Offer = [
  {
    per: 'Ulimated',
    off: 28,
    duration: 5,
    mode: 'Train',
    imgSrc:img,
    location: 'Ooty',
    price: '8219',
    tag: "/"
  },

  {
    per: 'Ulimated',
    off: 15,
    duration: 3,
    mode: 'Flight',
    imgSrc:img,
    location: 'Goa',
    price: '7635',
    tag: "/"
  },

  {
    per: 'Ulimated',
    off: 35,
    duration: 4,
    mode: 'Van',
    imgSrc:img,
    location: 'Ladakh',
    price: '5899',
    tag: "/"
  },

  {
    per: 'Ulimated',
    off: 20,
    duration: 5,
    mode: 'Train',
    imgSrc:img,
    location: 'Coorg',
    price: '9999',
    tag: "/"
  }
]

    


  return (
    <>
    <Navbar/>


    <section className='pack'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title"zz>
              Plan Your Trip With Travel Dot
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <Link to='/destiny'>Explore Now</Link>
          </button>
        </div>

        <div className="homeCard grid">

            <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="location">Source</label>
              <input id='src' type="text" placeholder='Source' />
            </div>

            <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
              <label htmlFor="distance">Destination</label>
              <input id='des' type="text" placeholder='Dream Destination' />
            </div>

            <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="price">Person</label>
              <input id='persons' type="text" placeholder='1-6' />
            </div>

            <button onClick={button} data-aos="fade-left" data-aos-duration="2000" id='search' className="btn">
              Search
            </button>

        </div>


      </div>
    </section>



    <section className="offer container section">
      <div className="secContainer">

        <div className="secIntro heading">
          <h2 className="secTitle">
            Special Packages
          </h2>
          <p>
          From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>


        <div className="mainContent grid offerlist">

          {
            Offer.map(({off,duration,mode,imgSrc,per,location,price})=>{
              return(
                <div className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt="{destTitle}" />

                    <span className="discount">
                      {off}% Off
                    </span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                      ₹ {price}
                      </h4>
                      <span className='status'>
                        Special
                      </span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <BsPersonFill className='icon'/>
                        <small>{per}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <GiDuration className='icon'/>
                        <small>{duration} days</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdModeOfTravel className='icon'/>
                        <small>{mode}</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn  className='icon'/>
                      <small>{location}</small>
                    </div>

                    <button className='btn flex'>Book
                    <BsArrowRightShort className='icon'/>
                    </button>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </section>


    



    
    <Footer/>
    </>

  )
}

export default packages
