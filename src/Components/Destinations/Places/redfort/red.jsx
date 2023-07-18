import React from 'react'
import './red.css'
import { Link } from 'react-router-dom'
import '../../../Navbar/navbar.css'
import '../../../Home/home.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import 'aos/dist/aos.css'
import Navbar from '../../../Navbar1/Navbar'
import Footer from '../../../Footer/Footer'
import '../../../Popular/popular.css'
import '../../../Gallery/gallery.css'
import '../../../Offers/offers.css'
import img1 from '../../../../Assests/RD/w4.jpg'
import img2 from '../../../../Assests/RD/w2.jpg'
import img3 from '../../../../Assests/RD/w1.webp'
import img0 from '../../../../Assests/RD/w7.jpg'

import {BsPersonFill} from 'react-icons/bs'
import {GiDuration} from 'react-icons/gi'
import {MdModeOfTravel} from 'react-icons/md'
import {IoFastFoodOutline} from 'react-icons/io5'
import img4 from '../../../../Assests/NBR/d1.jpg'
import img5 from '../../../../Assests/NBR/d2.jpg'
import img6 from '../../../../Assests/NBR/d3.jpg'
import img7 from '../../../../Assests/NBR/d4.jpg'
import img8 from '../../../../Assests/NBR/d5.jpg'
import img9 from '../../../../Assests/NBR/d6.jpg'
import img10 from '../../../../Assests/NBR/d7.jpg'
import img11 from '../../../../Assests/NBR/d8.webp'
import img21 from '../../../../Assests/NBR/h1.jpg'
import img22 from '../../../../Assests/NBR/h2.jpg'
import img23 from '../../../../Assests/NBR/h3.jpg'





const red = () => {

  const Image = [
    {
      id:1,
      imgSrc:img1,
      destTitle: 'Taj Mahal',
      location: 'Agra',
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
    pname: "Humayun's Tomb",
    location: 'New Delhi',
    duration: "15min",
    dis: "6km",
    tag: "https://goo.gl/maps/Hf795uq85b1svg2g9"
  },

  {
    id:2,
    imgSrc:img5,
    pname: "Qutab Minar",
    location: 'New Delhi',
    duration: "38min",
    dis: "18km",
    tag: "https://goo.gl/maps/Rp95Cz85vqbjBqpTA"
  },

  {
    id:3,
    imgSrc:img6,
    pname: 'Jama Masjid',
    location: 'New Delhi',
    duration: "11min",
    dis: "900meter",
    tag: "https://goo.gl/maps/gKPAgHjfKzvvbxhQ9"
  },

  {
    id:4,
    imgSrc:img7,
    pname: 'India Gate',
    location: 'New Delhi',
    duration: "15min",
    dis: "5.8km",
    tag: "https://goo.gl/maps/7Jt9hGLKRwKDpZtY8"
  },

  {
    id:5,
    imgSrc:img8,
    pname: 'Lodhi Garden',
    location: 'New Delhi',
    duration: "28min",
    dis: "13km",
    tag: "https://goo.gl/maps/mXqmtpRUQEqoFgRM8"
  },
  
  {
    id:6,
    imgSrc:img9,
    pname: 'Lotus Temple',
    location: 'New Delhi',
    duration: "29min",
    dis: "14km",
    tag: "https://goo.gl/maps/TJNWwwSeXT4qzX9d7"
  },

  {
    id:7,
    imgSrc:img10,
    pname: 'Akshardham',
    location: 'New Delhi',
    duration: "14min",
    dis: "8km",
    tag: "https://goo.gl/maps/ouvHFVeih2GV1Rsu9"
  },

  {
    id:8,
    imgSrc:img11,
    pname: 'Tughlakabad Fort',
    location: 'New Delhi',
    duration: "39min",
    dis: "20km",
    tag: "https://goo.gl/maps/HeCTLLD9ciKNXvGz9"
  }

]



const stay = [
  {
    id:1,
    imgSrc:img21,
    hname: 'Haveli Dharampura',
    location: 'New Delhi',
    price: '₹12000',
    bed: 2,
    food: 24,
    dis: "850meter",
    duration: "5mins",
    per: 4,
    tag:"https://goo.gl/maps/t7jJMwkUEzsPEy7M7"
  },

  {
    id:2,
    imgSrc:img22,
    hname: 'The Imperial New Delhi',
    location: 'New Delhi',
    price: '₹2999',
    bed: 2,
    food: 24,
    dis: "6min",
    duration: "15mins",
    per: 4,
    tag:"https://goo.gl/maps/5ac2aGuSuu7p57766"
  },

  {
    id:3,
    imgSrc:img23,
    hname: 'The Leela Palace',
    location: 'New Delhi',
    price: '₹14799',
    bed: 2,
    food: 24,
    dis: "2km",
    duration: "10mins",
    per: 4,
    tag:"https://goo.gl/maps/CZ4RApRXSPNreVio7"
  }
]






  return (
    <>
    <Navbar />

    <section className='red'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              RED FORT
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            "The Red Fort is not just a monument, it's a symbol of India's rich history and cultural heritage."        
          </p>
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
                The Red Fort, also known as Lal Qila, is a historic fort complex located in Old Delhi, India. It was built in the 17th century by the Mughal Emperor Shah Jahan, who also built the Taj Mahal in Agra. The fort was constructed using red sandstone, giving it its characteristic hue.<br/><br/>

                The Red Fort served as the residence of the Mughal emperors for nearly 200 years, until the British colonial government took control of India in the 19th century. Today, the fort is a UNESCO World Heritage Site and a popular tourist destination, attracting visitors from all over the world.<br/><br/>

                The fort covers an area of approximately 254 acres and features several important structures, including the Diwan-i-Aam (Hall of Public Audience), the Diwan-i-Khas (Hall of Private Audience), and the Rang Mahal (Palace of Colors). The fort also includes several gardens, water channels, and pavilions.<br/><br/>

                The Red Fort is known for its intricate architectural details, including intricate carvings, marble inlays, and calligraphy. The fort also features a sound and light show in the evenings, which tells the history of the fort and its role in India's struggle for independence.<br/><br/>

                The Red Fort is also the site of India's Independence Day celebrations, with the Prime Minister of India hoisting the national flag and delivering a speech from the ramparts of the fort. The fort is an important symbol of India's cultural heritage and a must-visit destination for anyone interested in Indian history and architecture. <br/><br/>             
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

export default red
