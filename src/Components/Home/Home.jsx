import React, {useEffect} from 'react'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  })

  return (
    <section className='home'>
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

        {/* <div className="homeCard grid">

            <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder='Dream Destination' />
            </div>

            <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
              <label htmlFor="distance">Location</label>
              <input type="text" placeholder='11/Meters' />
            </div>

            <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="price">Location</label>
              <input type="text" placeholder='&#8377;1599 - &#8377;2599' />
            </div>

            <button data-aos="fade-left" data-aos-duration="2000" className="btn">
              Search
            </button>

        </div> */}


      </div>
    </section>
  )
}

export default Home
