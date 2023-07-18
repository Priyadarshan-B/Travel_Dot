import React from 'react'
import { Link } from 'react-router-dom'
import '../../Navbar/navbar.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import 'aos/dist/aos.css'
import Navbar from '../../Navbar1/Navbar'
import Footer from '../../Footer/Footer'
import '../../Popular/popular.css'
import './famous.css'
import img1 from '../../../Assests/Taj/q1.jpg'
import img2 from '../../../Assests/RD/w4.jpg'
import img3 from '../../../Assests/Gateway/e5.jpg'
import img4 from '../../../Assests/ladak/l8.webp'
import img5 from '../../../Assests/Charminar/c2.jpg'
import img6 from '../../../Assests/Victoria/v5.jpg'
import img7 from '../../../Assests/Munnar/m2.jpg'
import img8 from '../../../Assests/mysuru/my12.jpg'
import img9 from '../../../Assests/Baga/b8.jpg'


const famous = () => {


  const Data = [
    {
      id:1,
      imgSrc:img1,
      destTitle: 'Taj Mahal',
      location: 'Agra',
      tag: "/tajmahal"
    },
  
    {
      id:2,
      imgSrc:img2,
      destTitle: 'Red Fort',
      location: 'Delhi',
      tag: "/red"
    },
  
    {
      id:3,
      imgSrc:img3,
      destTitle: 'Gateway of India',
      location: 'Maharashtra',
      tag: "/gate"
    },

    {
      id:4,
      imgSrc:img4,
      destTitle: 'Ladakh',
      location: 'Kashmir',
      tag: "/ladakh"
    },

    {
      id:5,
      imgSrc:img5,
      destTitle: 'Charminar',
      location: 'Telangana',
      tag: "/char"
    },
    
    {
      id:6,
      imgSrc:img9,
      destTitle: 'Baga Beach',
      location: 'Goa',
      tag: "/baga"
    },
  
    {
      id:7,
      imgSrc:img7,
      destTitle: 'Munnar',
      location: 'Kerala',
      tag: "/munnar"
    },
  
    {
      id:8,
      imgSrc:img8,
      destTitle: 'Mysore Palace',
      location: 'Karnataka',
      tag: "/mysore"
    }
  
  ]







  return (
    <>
    <Navbar />

    <section className='fam'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              Famous Destinations
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
              Famous Destinations
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
                    
                     <img src={imgSrc} alt='Famous'/> 

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
                        </span>Famous
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

export default famous
