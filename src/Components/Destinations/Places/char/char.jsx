import React from 'react'
import './char.css'
import { Link } from 'react-router-dom'
import '../../../Navbar/navbar.css'
import '../../../Home/home.css'
//import {BsArrowRightShort} from 'react-icons/bs'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
//import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
//import Aos from 'aos'


import {BsPersonFill} from 'react-icons/bs'
import {GiDuration} from 'react-icons/gi'
import {MdModeOfTravel} from 'react-icons/md'
import {IoFastFoodOutline} from 'react-icons/io5'

import 'aos/dist/aos.css'
import img from '../../../../Assests/bg1.jpg'
import Navbar from '../../../Navbar1/Navbar'
import Footer from '../../../Footer/Footer'
import '../../../Popular/popular.css'
import '../../../Gallery/gallery.css'
import '../../../Offers/offers.css'
import img1 from '../../../../Assests/NBC/a1.jpg'
import img2 from '../../../../Assests/NBC/a2.jpg'
import img3 from '../../../../Assests/NBC/a3.jpg'
import img0 from '../../../../Assests/NBC/a4.jpg'
import img4 from '../../../../Assests/NBC/q11.jpg'
import img5 from '../../../../Assests/NBC/q2.jpg'
import img6 from '../../../../Assests/NBC/q3.jpg'
import img7 from '../../../../Assests/NBC/q4.jpg'
import img8 from '../../../../Assests/NBC/q5.jpg'
import img9 from '../../../../Assests/NBC/q6.webp'
import img10 from '../../../../Assests/NBC/q7.jpg'
import img11 from '../../../../Assests/NBC/q8.jpg'
import img12 from '../../../../Assests/NBC/q9.jpg'
import img13 from '../../../../Assests/NBC/q10.jpg'
import img14 from '../../../../Assests/NBC/a21.jpg'



const char = () => {

      const Image = [
        {
          id:1,
          imgSrc:img1,
          destTitle: 'Taj Mahal',
          location: 'Hyderabad',
          tag: "/famous"
        },
      
        {
          id:2,
          imgSrc:img2,
          destTitle: 'Red Fort',
          location: 'Delhi',
          tag: "/"
        },
      
        {
          id:3,
          imgSrc:img3,
          destTitle: 'Gateway of India',
          location: 'Maharashtra',
          tag: "/"
        },
    
        {
          id:4,
          imgSrc:img0,
          destTitle: 'Ladakh',
          location: 'Kashmir',
          tag: "/"
        }

    ]


    const place = [
      {
        id:1,
        imgSrc:img4,
        pname: 'Golconda Fort',
        location: 'Hyderabad',
        duration: "38min",
        dis: "12km",
        tag: "https://goo.gl/maps/NKKr2ik69WXRDyzX6"
      },
    
      {
        id:2,
        imgSrc:img5,
        pname: "Ramoji Film City",
        location: 'Hyderabad',
        duration: "50min",
        dis: "25km",
        tag: "https://goo.gl/maps/wJDJNSbWP6WVTBYp8"
      },
    
      {
        id:3,
        imgSrc:img6,
        pname: 'Chowmahalla Palace',
        location: 'Hyderabad',
        duration: "17min",
        dis: "4.7km",
        tag: "https://goo.gl/maps/tvuZRuZAZ9ZK2zMq7"
      },
  
      {
        id:4,
        imgSrc:img7,
        pname: 'Birla Mandir',
        location: 'Hyderabad',
        duration: "15min",
        dis: "4.9km",
        tag: "https://goo.gl/maps/mgCAudWXfAVUiW9C9"
      },
  
      {
        id:5,
        imgSrc:img8,
        pname: 'Mecca Masjid',
        location: 'Hyderabad',
        duration: "16min",
        dis: "4.8km",
        tag: "https://goo.gl/maps/9VVdYCYco1732aEU9"
      },
      
      {
        id:6,
        imgSrc:img9,
        pname: 'Nehru Zoological Park',
        location: 'Hyderabad ',
        duration: "20min",
        dis: "8km",
        tag: "https://goo.gl/maps/jf16mFVF2KVsZUve9"
      },
    
      {
        id:7,
        imgSrc:img10,
        pname: 'Salar Jung Museum',
        location: 'Hyderabad',
        duration: "5min",
        dis: "2.7km",
        tag: "https://goo.gl/maps/7w7dJqH5B9CkpJ1A7"
      },
    
      {
        id:8,
        imgSrc:img11,
        pname: 'Begumpet',
        location: 'Hyderabad',
        duration: "17km",
        dis: "9km",
        tag: "https://goo.gl/maps/NLPsYpmeEXCpmBbJ7"
      }
    
    ]



  const stay = [
      {
        id:1,
        imgSrc:img12,
        hname: 'Hotel Royal Palace',
        location: 'Hyderabad',
        price: '₹2999',
        bed: 2,
        food: 24,
        dis: "62meter",
        duration: "2mins",
        per: 4,
        tag:"https://goo.gl/maps/ZzcHtX84gAmLX7oj7"
      },
    
      {
        id:2,
        imgSrc:img13,
        hname: 'OYO Hotel Pariwar Inn',
        location: 'Hyderabad',
        price: '1099',
        bed: 2,
        food: 24,
        dis: "1.9km",
        duration: "11mins",
        per: 4,
        tag:"https://goo.gl/maps/t6MjTZC6qVF5d3Zt8"
      },
    
      {
        id:3,
        imgSrc:img14,
        hname: 'Hotel Tara International',
        location: 'Hyderabad',
        price: '1912',
        bed: 2,
        food: 24,
        dis: "2.8km",
        duration: "14min",
        per: 4,
        tag:"https://goo.gl/maps/gmPcCAA3RQ6RFA6M8"
      },
    
      /* {
        id:4,
        imgSrc:img,
        hname: 'Machu Picchu',
        location: 'Peru',
        price: '2999',
        bed: 2,
        food: 24,
        dis: "500meter",
        duration: "10mins",
        per: 4,
        tag:""
      } */
    ]





  return (
    <>
    <Navbar />

    <section className='char'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              CHARMINAR
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
          The Charminar is a beautiful monument that stands as a symbol of Hyderabad's rich cultural heritage.          </p>
        </div>
      </div>
    </section>


    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle">
              About<br /><br />
              </h2>
              <p>
              Charminar is a historic monument located in the heart of the city of Hyderabad, India. It was built in 1591 by the Qutb Shahi dynasty, which ruled Hyderabad at that time. The monument is a stunning example of Indo-Islamic architecture, featuring four minarets that are intricately carved.<br/><br/>

              The name Charminar comes from two words, "char" meaning four and "minar" meaning tower, referring to the four minarets that dominate the structure. The monument is made of granite and limestone and stands at a height of 56 meters.<br/><br/>

              The Charminar is located in the bustling old city area of Hyderabad, and is surrounded by a vibrant bazaar that sells everything from jewelry to textiles to delicious street food. It is a popular destination for tourists and locals alike, and a must-visit spot for anyone visiting Hyderabad.<br/><br/>

              The monument has four arches facing in different directions, each leading to a different street. The arches are adorned with intricate carvings and inscriptions in Arabic and Persian.<br/><br/>

              The Charminar also features a mosque on the top floor, which is still in use today. Visitors can climb to the top of the monument to enjoy panoramic views of the city.<br/><br/>

              The Charminar is an important symbol of Hyderabad's cultural heritage and a testament to the city's rich history. It is a popular destination for festivals and cultural events, and is a source of pride for the people of Hyderabad.   <br/><br/>
             </p>
          </div>
        </div>


        </div>
    </section>



    <section className="gallery section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle">
                Gallery
              </h2>
              <p>
              A gallery is a space where art and beauty converge, inviting us to pause and appreciate<br /> the creativity of the human spirit.
              </p>
          </div>
        </div>


        <div className="mainContent">
            {
                Image.map(({imgSrc})=>{
                    return(
                        <div className="image">
                            <img src={imgSrc} />
                        </div>
                    )
                })
            }
        </div>

    </div>
    </section>





    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle">
              Places Nearby
              </h2>
              <p>
                Exploring places nearby can often reveal hidden gems and unexpected adventure.
              </p>
          </div>
        </div>



        <div className="mainContent grid">
          {
            place.map(({pname,imgSrc,dis,location,tag})=>{
              return(
                <div className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />

                    <div className="overlayInfo">
                      <h3>{pname}</h3>
                      <p>{location}</p>
                      <Link to={tag} target='_blank'>
                          <MdLocationOn className='icon'/>
                      </Link>
                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      <pre>  </pre>
                    </div>

                    <div className="destText flex">
                      <h6>{pname}</h6>
                      <span className='flex'>
                        <span className="dot">
                          <BsDot className='icon'/>
                        </span>{dis}
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




    <section className="offer container section">
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="secTitle">
            Stay
          </h2>
          <p>
          From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>


        <div className="mainContent grid">

          {
            stay.map(({hname,imgSrc,bed,per,dis,duration,location,price,tag,food})=>{
              return(
                <div className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt="{destTitle}" />
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                        {hname}
                      </h4>
                      <span className='status'>
                      <h5>{price}</h5>
                      </span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className='icon'/>
                        <small>{bed} Beds</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className='icon'/>
                        <small>1 Bath</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className='icon'/>
                        <small>Wi-Fi</small>
                      </div>
                      <div className="singleAmenity flex">
                        <BsPersonFill className='icon'/>
                        <small>{per}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <GiDuration className='icon'/>
                        <small>{duration}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <IoFastFoodOutline className='icon'/>
                        <small>{food} hrs</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdModeOfTravel className='icon'/>
                        <small>{dis}</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn  className='icon'/>
                      <small>{location}</small>
                    </div>

                    <Link to={tag}  target='_blank'>
                    <button className='btn flex'>Location
                    <MdLocationOn className='icon'/>
                    </button>
                    </Link>
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

export default char
