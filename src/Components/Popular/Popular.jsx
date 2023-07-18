import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './popular.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

import img from '../../Assests/bg1.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

import img1 from '../../Assests/Taj/q1.jpg'
import img2 from '../../Assests/Baga/b1.jpg'
import img3 from '../../Assests/Munnar/m2.jpg'
import img4 from '../../Assests/ladak/l8.webp'



const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle: 'Taj Mahal',
    location: 'Agra',
    tag : "/tajmahal"
  },

  {
    id:2,
    imgSrc:img2,
    destTitle: 'Baga Beach',
    location: 'Goa',
    tag : "/baga"
  },

  {
    id:3,
    imgSrc:img3,
    destTitle: 'Munnar',
    location: 'Kerala',
    tag : "/munnar"
  },

  {
    id:4,
    imgSrc:img4,
    destTitle: 'Ladakh',
    location: 'Jammu and Kashmir',
    tag : "/ladakh"
  }


]

const Popular = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  })



  return (
    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle">
                Popular Destination
              </h2>
              <p>
                From historical cities to natural specteculars, come see the best of the world!
              </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
            {/* <BsArrowLeftShort className="icon leftIcon"/> */}
            <Link to='/destiny'>
            <button class="cssbuttons-io-button"> View all <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="#f67009" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                 </div>
            </button>
            </Link>


            {/* <button className="btn">
            <pre>view all <BiRightArrowCircle className=""/></pre>
            </button> */}
          </div>
        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,tag})=>{
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
                      0{id}
                    </div>

                    <div className="destText flex">
                      <h6>{destTitle}</h6>
                      <span className='flex'>
                        <span className="dot">
                          <BsDot className='icon'/>
                        </span>
                        India
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
  )
}

export default Popular