/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import '../../Navbar/navbar.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import 'aos/dist/aos.css'

import Navbar from '../../Navbar1/Navbar'
import Footer from '../../Footer/Footer'
import '../../Popular/popular.css'
import './beach.css'

import img1 from '../../../Assests/BI/b1.jpg'
import img2 from '../../../Assests/BI/b2.jpg'
import img3 from '../../../Assests/BI/b3.jpg'
import img4 from '../../../Assests/BI/b4.jpg'
import img5 from '../../../Assests/BI/b5.jpg'
import img6 from '../../../Assests/BI/b6.jpg'
import img7 from '../../../Assests/BI/b7.jpg'


const beach = () => {

    const Data = [
        {
          id:1,
          imgSrc:img1,
          destTitle: 'Baga Beach',
          location: 'Goa',
          tag: "/famous",
          type: 'Beach'
        },
      
        {
          id:2,
          imgSrc:img2,
          destTitle: 'Kovalam',
          location: 'Kerala',
          tag: "/",
          type: 'Beach'
        },
      
        {
          id:3,
          imgSrc:img3,
          destTitle: 'Varkala',
          location: 'Kerala',
          tag: "/",
          type: 'Beach'
        },
    
        {
          id:4,
          imgSrc:img4,
          destTitle: 'Puri Beach',
          location: 'Odisha',
          tag: "/",
          type: 'Beach'
        },
    
        {
          id:5,
          imgSrc:img5,
          destTitle: 'Mahabalipuram Beach',
          location: 'amil Nadu',
          tag: "/",
          type: 'Beach'
        },
      
        {
          id:6,
          imgSrc:img6,
          destTitle: 'Radhanagar Beach',
          location: 'Andaman and Nicobar Islands',
          tag: "/",
          type: 'Beach'
        },

        {
          id:7,
          imgSrc:img7,
          destTitle: 'Vagator Beach',
          location: 'Goa',
          tag: "/",
          type: 'Beach'
        }
      
      
      ]




  return (
<>  
    <Navbar />

    <section className='beach'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              Beach
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>
            {/* <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore Now</a>
          </button> */}
        </div>
      </div>
    </section>

    

    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div  className="textDiv">
              <h2 className="secTitle">
              Beach
              </h2>
              <p data-aos="fade-right" data-aos-duration="2500">
                From historical cities to natural specteculars, come see the best of the world!
              </p>
          </div>
        </div>



        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,tag,type})=>{
              return(
                <div className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />

                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>
                      <Link to={tag}>
                          <BsArrowRightShort className='icon'/>
                      </Link>
                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      <pre>   </pre>
                    </div>

                    <div className="destText flex">
                      <h6>{destTitle}</h6>
                      <span className='flex'>
                        <span className="dot">
                          <BsDot className='icon'/>
                        </span>{type}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>


    <Footer />






    </>
  )
}

export default beach
