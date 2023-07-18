import React from 'react'
import { Link } from 'react-router-dom'
import '../../Navbar/navbar.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
/* import img from '../../../Assests/bg1.jpg' */
import Navbar from '../../Navbar1/Navbar'
import Footer from '../../Footer/Footer'
import '../../Popular/popular.css'
import './spiritual.css'
import img1 from '../../../Assests/SI/f1.jpg'
import img2 from '../../../Assests/SI/f2.jpg'
import img3 from '../../../Assests/SI/f3.jpg'
import img4 from '../../../Assests/SI/f4.jpg'
import img5 from '../../../Assests/SI/f5.jpg'
import img6 from '../../../Assests/SI/f6.jpg'





const spiritual = () => {

    

  const Data = [
    {
      id:1,
      imgSrc:img1,
      destTitle: 'Kedarnath',
      location: 'Uttarakhand',
      tag: "/famous"
    },
  
    {
      id:2,
      imgSrc:img2,
      destTitle: 'Tirupati',
      location: 'Andhra Pradesh',
      tag: "/"
    },
  
    {
      id:3,
      imgSrc:img3,
      destTitle: 'Amritsar',
      location: ' Punjab',
      tag: "/"
    },

    {
      id:4,
      imgSrc:img4,
      destTitle: 'Meenakshi Temple',
      location: 'Tamil Nadu',
      tag: "/"
    },

    {
      id:5,
      imgSrc:img5,
      destTitle: 'Tanjore',
      location: 'Tamil Nadu',
      tag: "/"
    },
    
    {
      id:6,
      imgSrc:img6,
      destTitle: 'Bodh Gaya',
      location: 'Bihar',
      tag: "/"
    }
  
  ]




  return (
<>
    <Navbar />

    <section className='spir'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              Spiritual Destinations
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>
{/* 
          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
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
              Spiritual Destinations
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
                      <h3>{destTitle}</h3>
                      <p>{location}</p>
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
                      <h6>{destTitle}</h6>
                      <span className='flex'>
                        <span className="dot">
                          <BsDot className='icon'/>
                        </span>Spiritual
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

export default spiritual
