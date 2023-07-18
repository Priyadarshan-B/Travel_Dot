import React, {useEffect, useState} from 'react'
import '../Navbar/navbar.css'
import './destiny.css'
import '../Footer/footer.css'
import '../Popular/popular.css'
import '../../app.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import Navbar from '../Navbar1/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import img from '../../Assests/bg1.jpg'

import img1 from '../../Assests/Kd/k3.jpg'
import img2 from '../../Assests/Kd/k4.jpg'
import img3 from '../../Assests/Kd/k5.webp'
import img4 from '../../Assests/Kd/k6.jpg'
import img5 from '../../Assests/Kd/k2.jpg'
import img6 from '../../Assests/Kd/k7.webp'
import Footer from '../Footer/Footer'


const Destiny = () => {

  const [active, setActive] = useState('navBar')
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  //code to remove Navbar
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




  const Data = [
    {
      id:1,
      imgSrc:img1,
      destTitle: 'Machu Picchu',
      location: 'Famous',
      tag: "/famous"
    },
  
    {
      id:2,
      imgSrc:img2,
      destTitle: 'Guanajuato',
      location: 'Hill Stations',
      tag: "/hills"
    },

    {
      id:3,
      imgSrc:img3,
      destTitle: 'Angkor Wat',
      location: 'Spiritual',
      tag: "/spiritual"
    },
  
    {
      id:4,
      imgSrc:img4,
      destTitle: 'Taj Mahal',
      location: 'Heritage',
      tag: "/heritage"
    },

    {
      id:5,
      imgSrc:img5,
      destTitle: 'Taj Mahal',
      location: 'Beach',
      tag: "/beach"
    }
  
  ]










  return (
    <>
    <Navbar />
  
    <section className='destiny'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              Destinations
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
          <div className="textDiv">
              <h2 className="secTitle">
                Kinds Of Destinations
              </h2>
              <p data-aos="fade-right" data-aos-duration="2500">
                From historical cities to natural specteculars, come see the best of the world!
              </p>
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
                      <h3>{location}</h3>
                      <p>Destinations</p>
                      <Link to={tag}>
                          <BsArrowRightShort className='icon'/>
                      </Link>
                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      <pre>  </pre>
                    </div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className='flex'>
                        <span className="dot">
                          <BsDot className='icon'/>
                        </span>
                        Dot
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




    <Footer/>


  </>
  )
}

export default Destiny
