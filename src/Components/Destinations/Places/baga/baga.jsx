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
import './baga.css'

import {BsPersonFill} from 'react-icons/bs'
import {GiDuration} from 'react-icons/gi'
import {MdModeOfTravel} from 'react-icons/md'
import {IoFastFoodOutline} from 'react-icons/io5'

import img1 from '../../../../Assests/NBB/w1.jpg'
import img2 from '../../../../Assests/NBB/w2.jpg'
import img3 from '../../../../Assests/NBB/w3.jpg'
import img0 from '../../../../Assests/NBB/w4.jpg'

import img4 from '../../../../Assests/NBB/w5.jpg'
import img5 from '../../../../Assests/NBB/w6.jpg'
import img6 from '../../../../Assests/NBB/w7.jpg'
import img7 from '../../../../Assests/NBB/w8.jpg'
import img8 from '../../../../Assests/NBB/w9.jpg'
import img9 from '../../../../Assests/NBB/w10.jpg'
import img10 from '../../../../Assests/NBB/w11.jpg'
import img11 from '../../../../Assests/NBB/w12.jpg'
import img12 from '../../../../Assests/NBB/a1.jpg'
import img13 from '../../../../Assests/NBB/a2.jpg'
import img14 from '../../../../Assests/NBB/a3.jpg'




const baga = () => {

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
        pname: 'Aguada Fort',
        location: 'Goa',
        duration: "25min",
        dis: "10km",
        tag: "https://goo.gl/maps/3NT9FbMZwvQBmRzN6"
      },
    
      {
        id:2,
        imgSrc:img5,
        pname: "Museum Of Goa",
        location: 'Goa',
        duration: "20min",
        dis: "9km",
        tag: "https://goo.gl/maps/XsLRt4GVLc97PuuA6"
      },
    
      {
        id:3,
        imgSrc:img6,
        pname: 'Dudhsagar Falls',
        location: 'Goa',
        duration: "6min",
        dis: "2km",
        tag: "https://goo.gl/maps/Dnp2QiSz9kNgAZjX6"
      },
  
      {
        id:4,
        imgSrc:img7,
        pname: 'Reis Magos Fort',
        location: 'Goa',
        duration: "24min",
        dis: "11km",
        tag: "https://goo.gl/maps/KwRaGUzwgUjsWE5M8"
      },
  
      {
        id:5,
        imgSrc:img8,
        pname: 'Dr. Salim Ali Bird Sanctuary',
        location: 'Goa',
        duration: "35min",
        dis: "20km",
        tag: "https://goo.gl/maps/P1fijtWaFJR8piHY9"
      },
      
      {
        id:6,
        imgSrc:img9,
        pname: 'Basilica of Bom Jesus',
        location: 'Goa',
        duration: "40min",
        dis: "25km",
        tag: "https://goo.gl/maps/Unwt8NBeh4jkzPHa8"
      },
    
      {
        id:7,
        imgSrc:img10,
        pname: 'Arvalem Caves',
        location: 'Goa',
        duration: "1hr",
        dis: "36km",
        tag: "https://goo.gl/maps/hs6be7nGVgUNupAn8"
      },
    
      {
        id:8,
        imgSrc:img11,
        pname: 'Juve Fort',
        location: 'Goa',
        duration: "54min",
        dis: "30km",
        tag: "https://goo.gl/maps/i5Rab9YzXpjTgWcy7"
      }
    
    ]



  const stay = [
      {
        id:1,
        imgSrc:img12,
        hname: 'The Baga Beach Resort',
        location: 'Goa',
        price: '6015',
        bed: 2,
        food: 24,
        dis: "59meter",
        duration: "1mins",
        per: 4,
        tag:"https://goo.gl/maps/1cMQ819NR5fHCod6A"
      },
    
      {
        id:2,
        imgSrc:img13,
        hname: 'Paparazzi Resort',
        location: 'Goa',
        price: '2999',
        bed: 2,
        food: 24,
        dis: "500meter",
        duration: "10mins",
        per: 4,
        tag:"https://goo.gl/maps/dDoeTfvtQhrgCiwPA"
      },
    
      {
        id:3,
        imgSrc:img14,
        hname: 'Larios Beach Holidays Resort',
        location: 'Goa',
        price: '2999',
        bed: 2,
        food: 24,
        dis: "800meter",
        duration: "10mins",
        per: 4,
        tag:"https://goo.gl/maps/xdxztuoCsZ9CcPTY6"
      },
    
      /* {
        id:4,
        imgSrc:img,
        hname: 'Machu Picchu',
        location: 'Goa',
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

    <section className='baga'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              BAGA BEACH
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
          Goa is a place where time stands still and the beauty of nature surrounds you.
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
              Goa Baga beach is an option for those who want to be away from the hustle and bustle found on the other beaches.<br/><br/>

Baga Beach in Goa looks as if it has come straight out of a painting... Majestic white waves rushing to wipe out the feet imprints left by you on the white sand while the wind continues to flirt with the palm trees.<br/><br/>

Goa's Baga beach is a small but perfect beach located between its two more famous cousins, Anjuna on one side and Calangute on the other. It is a good place to enjoy some quite moments and dwell in peaceful contemplation with oneself.<br/><br/>

The Baga beach is more of a fishing beach with the tourists from across the world trying to get that big catch.<br/><br/>

The Baga River flows down from one side offering a pleasant for children and those who love the water but can't risk the rip currents that swirl round the mouth, where the river and the sea meet and on the far right bank, tourists at Baga beach will see a group of black rocks against which the sea crashes     <br/><br/>         </p>
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

export default baga
