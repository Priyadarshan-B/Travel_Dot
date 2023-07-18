import React from 'react'
import './ladakh.css'
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

import {BsPersonFill} from 'react-icons/bs'
import {GiDuration} from 'react-icons/gi'
import {MdModeOfTravel} from 'react-icons/md'
import {IoFastFoodOutline} from 'react-icons/io5'



//import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../../../Assests/bg1.jpg'
import Navbar from '../../../Navbar1/Navbar'
import Footer from '../../../Footer/Footer'
import '../../../Popular/popular.css'
import '../../../Gallery/gallery.css'
import '../../../Offers/offers.css'

import img1 from '../../../../Assests/ladak/l10.jpg'
import img2 from '../../../../Assests/ladak/l8.webp'
import img3 from '../../../../Assests/ladak/l2.jpg'
import img0 from '../../../../Assests/ladak/l4.jpg'
import img4 from '../../../../Assests/NBL/a1.jpg'
import img5 from '../../../../Assests/NBL/a2.jpg'
import img6 from '../../../../Assests/NBL/a3.jpg'
import img7 from '../../../../Assests/NBL/a4.jpg'
import img8 from '../../../../Assests/NBL/a5.webp'
import img9 from '../../../../Assests/NBL/a6.jpg'
import img10 from '../../../../Assests/NBL/a7.jpg'
import img11 from '../../../../Assests/NBL/a8.jpg'
import img12 from '../../../../Assests/NBL/a9.avif'
import img13 from '../../../../Assests/NBL/a10.jpg'
import img14 from '../../../../Assests/NBL/a11.jpg'




const ladakh = () => {


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
        pname: 'Leh Palace',
        location: 'Ladakh',
        duration: "11min",
        dis: "4.4km",
        tag: "https://goo.gl/maps/D2m3WkboaczhXTkA6"
      },
    
      {
        id:2,
        imgSrc:img5,
        pname: "Nimmo Village",
        location: 'Ladakh',
        duration: "40min",
        dis: "32km",
        tag: "https://goo.gl/maps/qvAH67T7Bd8N2CzK6"
      },
    
      {
        id:3,
        imgSrc:img6,
        pname: 'Yaya Tso',
        location: 'Ladakh',
        duration: "1hr",
        dis: "50km",
        tag: "https://goo.gl/maps/hssS8F6gzcketjhg7"
      },
  
      {
        id:4,
        imgSrc:img7,
        pname: 'Shanti Stupa',
        location: 'Ladakh',
        duration: "9min",
        dis: "3.2km",
        tag: "https://goo.gl/maps/52gxqChK7vtr5txd7"
      },
  
      {
        id:5,
        imgSrc:img8,
        pname: 'Zorawar Fort',
        location: 'Ladakh',
        duration: "14min",
        dis: "5.5km",
        tag: "https://goo.gl/maps/48ayBXGL6LCV9Z5g7"
      },
      
      {
        id:6,
        imgSrc:img9,
        pname: 'Hemis National Park',
        location: 'Ladakh',
        duration: "1hr",
        dis: "50km",
        tag: "https://goo.gl/maps/EH6BaGrw9LZziEpk6"
      },
    
      {
        id:7,
        imgSrc:img10,
        pname: 'Kyago Tso',
        location: 'Ladakh',
        duration: "11min",
        dis: "4.2km",
        tag: "https://goo.gl/maps/ZzFzr3zrBJG6XKHK6"
      },
    
      {
        id:8,
        imgSrc:img11,
        pname: 'Leh City ',
        location: 'Ladakh',
        duration: "26min",
        dis: "13km",
        tag: "https://goo.gl/maps/6sgk871e3KM9Z2zj9"
      }
    
    ]



  const stay = [
      {
        id:1,
        imgSrc:img12,
        hname: 'The Maitreya Ladakh',
        location: 'Ladakh',
        price: '₹4504',
        bed: 2,
        food: 24,
        dis: "3.3km",
        duration: "8mins",
        per: 4,
        tag:"https://goo.gl/maps/cJaovHH3dtx6q1ne9"
      },
    
      {
        id:2,
        imgSrc:img13,
        hname: 'The Silk Route Ladakh',
        location: 'Ladakh',
        price: '₹4020',
        bed: 2,
        food: 24,
        dis: "6.6km",
        duration: "16mins",
        per: 4,
        tag:"https://goo.gl/maps/UML9FeCoFiC2B8fE7"
      },
    
      {
        id:3,
        imgSrc:img14,
        hname: 'Hotel Ladakh Inn',
        location: 'Ladakh',
        price: '₹3807',
        bed: 2,
        food: 24,
        dis: "5.7km",
        duration: "15mins",
        per: 4,
        tag:"https://goo.gl/maps/XYkmtGWg25EchUxm7"
      }
    ]





  return (
    <>
    <Navbar />

    <section className='lad'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              LADAKH
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
          Ladakh is a land of breathtaking beauty, where the stark landscape is softened by the warmth of its people.          </p>
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
              Ladakh is a high-altitude region located in the northernmost part of India, in the state of Jammu and Kashmir. It is known for its breathtaking landscapes, vibrant culture, and unique way of life. The region is surrounded by some of the world's highest mountain ranges, including the Karakoram and the Himalayas. The landscape is characterized by high-altitude deserts, snow-capped peaks, crystal-clear lakes, and ancient monasteries perched atop rocky cliffs.<br/><br/>

Ladakh has a rich cultural heritage, influenced by Indian, Tibetan, and Central Asian traditions. The region is home to several ethnic groups, including the Ladakhis, who are predominantly Buddhist, and the Baltis, who are predominantly Shia Muslims. The people of Ladakh are known for their warm hospitality, colorful festivals, and unique way of life.<br/><br/>

Tourism is one of the main sources of income in Ladakh, with visitors drawn to the region's stunning natural beauty and cultural attractions. Popular tourist destinations include the Hemis Monastery, the Thiksey Monastery, and the Leh Palace. Visitors can also explore the high-altitude deserts of Nubra Valley, visit the crystal-clear Pangong Tso Lake, or trek through the Zanskar Range.<br/><br/>

Ladakh is also a popular destination for adventure sports, including trekking, mountaineering, river rafting, and mountain biking. The region is home to several high-altitude passes, including the Khardung La, one of the world's highest motorable passes.<br/><br/>

Despite its stunning natural beauty and vibrant culture, Ladakh faces several challenges, including environmental degradation, water scarcity, and the impact of climate change. Efforts are underway to promote sustainable tourism and protect the region's fragile ecosystem.<br/><br/>

Overall, Ladakh is a unique and awe-inspiring destination that attracts visitors from around the world. Its stunning landscapes, vibrant culture, and warm hospitality make it a must-visit destination for anyone seeking an adventure off the beaten path.<br/><br/>
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

export default ladakh
