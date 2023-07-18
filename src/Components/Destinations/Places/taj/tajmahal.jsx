import React from 'react'
import { Link } from 'react-router-dom'
import '../../../Navbar/navbar.css'
import '../../../Home/home.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'

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
import './taj.css'
import img1 from '../../../../Assests/Taj/q3.jpg'
import img2 from '../../../../Assests/Taj/q2.jpg'
import img3 from '../../../../Assests/Taj/q4.jpg'
import img0 from '../../../../Assests/Taj/q1.jpg'
import img4 from '../../../../Assests/NBT/a1.jpg'
import img5 from '../../../../Assests/NBT/a2.jpg'
import img6 from '../../../../Assests/NBT/a3.jpg'
import img7 from '../../../../Assests/NBT/a4.jpg'
import img8 from '../../../../Assests/NBT/a5.jpg'
import img9 from '../../../../Assests/NBT/a6.jpg'
import img10 from '../../../../Assests/NBT/a7.jpg'
import img11 from '../../../../Assests/NBT/a8.jpg'
import img18 from '../../../../Assests/NBT/a9.jpg'
import img12 from '../../../../Assests/NBT/a10.jpg'
import img13 from '../../../../Assests/NBT/a11.avif'
import img14 from '../../../../Assests/NBT/a1.jpg'



const tajmahal = () => {


    const Image = [
      {
        id:1,
        imgSrc:img1,
        destTitle: 'Taj Mahal'
      },
    
      {
        id:2,
        imgSrc:img2,
        destTitle: 'Red Fort'
      },
    
      {
        id:3,
        imgSrc:img3,
        destTitle: 'Gateway of India'
      },
  
      {
        id:4,
        imgSrc:img0,
        destTitle: 'Ladakh'
      }

    ]

    const place = [
        {
          id:1,
          imgSrc:img4,
          pname: 'Agra Fort',
          location: 'Agra',
          duration: "5min",
          dis: "2.2km",
          tag: "https://goo.gl/maps/jbCD16GTDcfZMBEv7"
        },
      
        {
          id:2,
          imgSrc:img5,
          pname: "Akbar's Tomb",
          location: 'Agra',
          duration: "33min",
          dis: "17km",
          tag: "https://goo.gl/maps/th5RnyZeSuuU5m6fA"
        },
      
        {
          id:3,
          imgSrc:img6,
          pname: 'Panch Mahal',
          location: 'Fatehpur Sikri',
          duration: "55min",
          dis: "40km",
          tag: "https://goo.gl/maps/3xRsq164R6rzNcEPA"
        },
    
        {
          id:4,
          imgSrc:img7,
          pname: 'Jama Masjid',
          location: 'Agra',
          duration: "50min",
          dis: "40km",
          tag: "https://goo.gl/maps/2QZDtKk5tk7WEa7i9"
        },
    
        {
          id:5,
          imgSrc:img8,
          pname: 'Ram Bagh',
          location: 'Agra',
          duration: "16min",
          dis: "6.6km",
          tag: "https://goo.gl/maps/FmMxTnAej3ggKveN9"
        },
        
       {
          id:6,
          imgSrc:img9,
          pname: 'Itmad-ud-Daula',
          location: 'Agra',
          duration: "13min",
          dis: "5.2Km",
          tag: "https://goo.gl/maps/X7t5BPih4DRrXKEm6"
        },
      
        {
          id:7,
          imgSrc:img10,
          pname: 'Chini Ka Rauza',
          location: 'Agra',
          duration: "15min",
          dis: "5.7km",
          tag: "https://goo.gl/maps/fw7xdpwVpLNQd15K9"
        },
      
        {
          id:8,
          imgSrc:img11,
          pname: 'Aram Bagh',
          location: 'Agra',
          duration: "15min",
          dis: "6.1km",
          tag: "https://goo.gl/maps/k4j3AmYTKs2Byixr8"
        } 
      
      ]



    const stay = [
        {
          id:1,
          imgSrc:img18,
          hname: 'Hotel Moti Palace',
          location: 'Agra',
          price: '₹1296',
          bed: 2,
          food: 24,
          dis: "4.2km",
          duration: "12mins",
          per: 4,
          tag:"https://goo.gl/maps/F9vKi5rF5vCoh2Gr5"
        },
      
        {
          id:2,
          imgSrc:img12,
          hname: 'Imperial Hotel',
          location: 'Agra',
          price: '₹3347',
          bed: 2,
          food: 24,
          dis: "3.5km",
          duration: "12mins",
          per: 4,
          tag:"https://goo.gl/maps/nJ7xC75sDmXciytF8"
        },
      
        {
          id:3,
          imgSrc:img13,
          hname: 'Hotel Orange',
          location: 'Agra',
          price: '₹2599',
          bed: 2,
          food: 24,
          dis: "4km",
          duration: "10mins",
          per: 4,
          tag:"https://goo.gl/maps/3NDwdjSKWPQoeTkF7"
        }
      ]
      

  return (
    <>
    <Navbar />

    <section className='taj'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              TAJ MAHAL
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
           The beauty and grandeur of the Taj Mahal continue to mesmerize visitors from around the world, leaving them in awe and wonder!
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
                The Taj Mahal is a white marble mausoleum located in Agra, India. It was built by the Mughal emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, who died in 1631. Construction of the Taj Mahal began in 1632 and was completed in 1653.<br/><br/>

                The Taj Mahal is considered one of the most beautiful buildings in the world and is a UNESCO World Heritage Site. It is renowned for its stunning architecture and intricate carvings, which are made from a variety of precious and semi-precious stones such as lapis lazuli, turquoise, and malachite.<br/><br/>

                The main building of the Taj Mahal is surrounded by a large garden, reflecting pools, and other structures such as a mosque and a guest house. The main entrance to the complex is through a gateway made of red sandstone, which is decorated with calligraphy and geometric patterns.<br/><br/>

                The interior of the Taj Mahal is equally stunning, with intricate carvings and inlaid designs covering the walls and ceilings. The centerpiece of the mausoleum is the tomb of Mumtaz Mahal, which is made of white marble and decorated with intricate carvings and calligraphy.<br/><br/>

                The Taj Mahal is considered a masterpiece of Mughal architecture and is visited by millions of tourists every year. It is a symbol of love and devotion and remains one of the most popular landmarks of India.
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

export default tajmahal
