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
import './hills.css'

import img1 from '../../../Assests/FI/f1.jpg'
import img2 from '../../../Assests/FI/f2.jpg'
import img3 from '../../../Assests/FI/f3.jpg'
import img4 from '../../../Assests/FI/f4.jpg'
import img5 from '../../../Assests/FI/f5.jpg'
import img6 from '../../../Assests/FI/f6.jpg'
import img7 from '../../../Assests/FI/f7.jpg'


const hills = () => {



    const Data = [
        {
          id:1,
          imgSrc:img1,
          destTitle: 'Shimla',
          location: 'Himachal Pradesh',
          tag: "/famous",
          type: 'Hills'
        },
      
        {
          id:2,
          imgSrc:img2,
          destTitle: 'Ooty',
          location: 'Tamil Nadu',
          tag: "/",
          type: 'Hills'
        },
      
        {
          id:3,
          imgSrc:img3,
          destTitle: 'Jog Falls',
          location: 'Karnataka',
          tag: "/",
          type: 'Falls'
        },
    
        {
          id:4,
          imgSrc:img4,
          destTitle: 'Coorg',
          location: 'Karnataka',
          tag: "/",
          type: 'Hills'
        },
    
        {
          id:5,
          imgSrc:img5,
          destTitle: 'Athirapally Falls',
          location: 'Kerala',
          tag: "/",
          type: 'Falls'
        },
      
        {
          id:6,
          imgSrc:img6,
          destTitle: 'Kodaikanal',
          location: 'Tamil Nadu',
          tag: "/",
          type: 'Hills'
        },

        {
          id:7,
          imgSrc:img7,
          destTitle: 'Gokak Falls',
          location: 'Karnataka',
          tag: "/",
          type: 'Falls'
        }
      
      
      ]
    
    






  return (
<>
    <Navbar />

    <section className='hills'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              Hill Stations & Nature
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
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle">
              Hill Stations & Nature
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

export default hills
