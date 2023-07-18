import React from 'react'
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
import 'aos/dist/aos.css'
import img from '../../../../Assests/bg1.jpg'
import Navbar from '../../../Navbar1/Navbar'
import Footer from '../../../Footer/Footer'
import '../../../Popular/popular.css'
import '../../../Gallery/gallery.css'
import '../../../Offers/offers.css'
import './munnar.css'

import {BsPersonFill} from 'react-icons/bs'
import {GiDuration} from 'react-icons/gi'
import {MdModeOfTravel} from 'react-icons/md'
import {IoFastFoodOutline} from 'react-icons/io5'

import img0 from '../../../../Assests/NBM/w1.jpg'
import img1 from '../../../../Assests/NBM/w2.jpg'
import img2 from '../../../../Assests/NBM/w3.jpg'
import img3 from '../../../../Assests/NBM/w4.jpg'

import img4 from '../../../../Assests/NBM/w5.jpg'
import img5 from '../../../../Assests/NBM/w6.jpg'
import img6 from '../../../../Assests/NBM/w7.jpg'
import img7 from '../../../../Assests/NBM/w8.jpg'
import img8 from '../../../../Assests/NBM/w9.jpg'
import img9 from '../../../../Assests/NBM/w10.jpg'
import img10 from '../../../../Assests/NBM/w11.jpg'
import img11 from '../../../../Assests/NBM/w12.avif'
import img12 from '../../../../Assests/NBM/a1.webp'
import img13 from '../../../../Assests/NBM/a2.jpg'
import img14 from '../../../../Assests/NBM/a3.jpg'



const munnar = () => {

      const Image = [
        {
          id:1,
          imgSrc:img0,
          destTitle: 'Taj Mahal',
          location: 'Agra',
          tag: "/famous"
        },
      
        {
          id:2,
          imgSrc:img1,
          destTitle: 'Red Fort',
          location: 'Delhi',
          tag: "/"
        },
      
        {
          id:3,
          imgSrc:img2,
          destTitle: 'Gateway of India',
          location: 'Maharashtra',
          tag: "/"
        },
    
        {
          id:4,
          imgSrc:img3,
          destTitle: 'Ladakh',
          location: 'Kashmir',
          tag: "/"
        }

    ]

    const place = [
      {
        id:1,
        imgSrc:img4,
        pname: 'Eravikulam National Park',
        location: 'Munnar',
        duration: "20",
        dis: "12km",
        tag: "https://goo.gl/maps/38vtkczoXwiKTnze9"
      },
    
      {
        id:2,
        imgSrc:img5,
        pname: "Mattupetty Dam",
        location: 'Munnar',
        duration: "25min",
        dis: "11km",
        tag: "https://goo.gl/maps/45WshwybK4QUveb38"
      },
    
      {
        id:3,
        imgSrc:img6,
        pname: 'Anamudi',
        location: 'Kannan Devan Hills',
        duration: "30min",
        dis: "15km",
        tag: "https://goo.gl/maps/hAUhBbvWSACwcYY27"
      },
  
      {
        id:4,
        imgSrc:img7,
        pname: 'Tea Museum',
        location: 'Munnar',
        duration: "4min",
        dis: "1.3km",
        tag: "https://goo.gl/maps/B66q2aeyrVEzyYJX9"
      },
  
      {
        id:5,
        imgSrc:img8,
        pname: 'Botanical Garden',
        location: 'Munnar',
        duration: "6min",
        dis: "1.9km",
        tag: "https://goo.gl/maps/TMcuXpic6DdkAyP48"
      },
      
      {
        id:6,
        imgSrc:img9,
        pname: 'Munnar Rose Garden',
        location: 'Munnar',
        duration: "8min",
        dis: "2.6km",
        tag: "https://goo.gl/maps/QEAtjqZkJoDV8NwYA"
      },
    
      {
        id:7,
        imgSrc:img10,
        pname: 'The Blossom Hydel Park',
        location: 'Munnar',
        duration: "9min",
        dis: "3.2km",
        tag: "https://goo.gl/maps/Q5rY5QDAt692Sh9q7"
      },
    
      {
        id:8,
        imgSrc:img11,
        pname: 'Pothamedu View Point',
        location: 'Munnar',
        duration: "13min",
        dis: "4.5km",
        tag: "https://goo.gl/maps/eiXpNBCNCJumeF4W7"
      }
    
    ]



  const stay = [
      {
        id:1,
        imgSrc:img12,
        hname: 'Hotel C7',
        location: 'Munnar',
        price: '₹3159',
        bed: 2,
        food: 24,
        dis: "550meter",
        duration: "7mins",
        per: 4,
        tag:"https://goo.gl/maps/QxgpcF2aWdyKFTYS7"
      },
    
      {
        id:2,
        imgSrc:img13,
        hname: 'Jays Inn',
        location: 'Munnar',
        price: '₹1455',
        bed: 2,
        food: 24,
        dis: "500meter",
        duration: "6mins",
        per: 4,
        tag:"https://goo.gl/maps/oyhi9gPoq4LrvpfF9"
      },
    
      {
        id:3,
        imgSrc:img14,
        hname: 'I V COTTAGE',
        location: 'Munnar',
        price: '₹3523',
        bed: 2,
        food: 24,
        dis: "1.9km",
        duration: "7mins",
        per: 4,
        tag:"https://goo.gl/maps/68ed4b3vZmAWrzMQ6"
      }
    ]




  return (
    <>
    <Navbar />

    <section className='munnar'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              MUNNAR
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
          Munnar is a beautiful hill station located in the Western Ghats of Kerala, India. It is famous for its lush green tea plantations, misty hills, and scenic beauty.
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
              Munnar is a charming hill station nestled in the Western Ghats mountain range in Kerala, India. It is situated at an altitude of around 1,600 meters above sea level, and its cool climate makes it a popular summer retreat. Munnar is famous for its vast stretches of tea plantations, which cover the surrounding hills and valleys. The tea estates were established by the British in the late 19th century and are still operational today. Visitors can explore the lush green plantations, watch tea processing, and learn about the history of tea in Munnar. The town is also home to several wildlife sanctuaries, including the Eravikulam National Park, which is home to the endangered Nilgiri Tahr. Trekking, camping, and bird watching are popular activities in the park. Other popular tourist attractions in Munnar include Mattupetty Dam, Echo Point, and Top Station. The town is also renowned for its spices, and visitors can purchase a variety of authentic spices at the local markets. Overall, Munnar is a beautiful and serene destination that offers a refreshing break from the hustle and bustle of city life.
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

export default munnar
