import React from 'react'
import { Link } from 'react-router-dom'
import '../../Navbar/navbar.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Navbar from '../../Navbar1/Navbar'
import Footer from '../../Footer/Footer'
import '../../Popular/popular.css'
import './heritage.css'

import img1 from '../../../Assests/HI/q1.jpg'
import img2 from '../../../Assests/HI/q2.jpg'
import img3 from '../../../Assests/HI/q3.jpg'
import img4 from '../../../Assests/HI/q4.jpg'
import img5 from '../../../Assests/HI/q5.jpg'


const heritage = () => {

    const Data = [
        {
          id:1,
          imgSrc:img1,
          destTitle: 'Taj Mahal',
          location: 'Uttar Pradesh',
          tag: "/famous",
          type: 'Heritage'
        },
      
        {
          id:2,
          imgSrc:img2,
          destTitle: 'Red Fort',
          location: 'Delhi',
          tag: "/",
          type: 'Heritage'
        },
      
        {
          id:3,
          imgSrc:img3,
          destTitle: 'Mahabalipuram',
          location: 'Tamil Nadu',
          tag: "/",
          type: 'Heritage'
        },
    
        {
          id:4,
          imgSrc:img4,
          destTitle: 'Charminar',
          location: 'Telangana',
          tag: "/",
          type: 'Heritage'
        },
    
        {
          id:5,
          imgSrc:img5,
          destTitle: 'Brihadisvara Temple',
          location: 'Tamil Nadu',
          tag: "/",
          type: 'Heritage'
        }
      
      
      ]
    



  return (
    <>
    <Navbar />

    <section className='heri'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              Heritage Destinations
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
              Heritage Destinations
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

export default heritage
