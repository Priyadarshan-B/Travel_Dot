import React from 'react'
import './mysore.css'
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

import {BsPersonFill} from 'react-icons/bs'
import {GiDuration} from 'react-icons/gi'
import {MdModeOfTravel} from 'react-icons/md'
import {IoFastFoodOutline} from 'react-icons/io5'

import img0 from '../../../../Assests/NBK/a1.jpg'
import img1 from '../../../../Assests/NBK/a2.jpg'
import img2 from '../../../../Assests/NBK/a3.jpg'
import img3 from '../../../../Assests/NBK/a4.jpg'
import img4 from '../../../../Assests/NBK/a5.webp'
import img5 from '../../../../Assests/NBK/a6.jpg'
import img6 from '../../../../Assests/NBK/a7.jpg'
import img7 from '../../../../Assests/NBK/a8.jpg'
import img8 from '../../../../Assests/NBK/a9.jpg'
import img9 from '../../../../Assests/NBK/a10.jpg'
import img10 from '../../../../Assests/NBK/a11.jpg'
import img11 from '../../../../Assests/NBK/a12.jpg'
import img12 from '../../../../Assests/NBK/a13.jpg'
import img13 from '../../../../Assests/NBK/a14.jpg'
import img14 from '../../../../Assests/NBK/a15.jpg'





const mysore = () => {


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
        pname: 'Brindavana Gardens',
        location: 'Mysore',
        duration: "35min",
        dis: "20km",
        tag: "https://goo.gl/maps/qMekLepArSaSiy2D7"
      },
    
      {
        id:2,
        imgSrc:img5,
        pname: "Sri Chamarajendra Zoological Gardens",
        location: 'Mysore',
        duration: "9min",
        dis: "3.8km",
        tag: "https://goo.gl/maps/8c2WfBoPMH9zDKN98"
      },
    
      {
        id:3,
        imgSrc:img6,
        pname: 'Lingambudhi Park',
        location: 'Mysore',
        duration: "10min",
        dis: "4.6km",
        tag: "https://goo.gl/maps/35bdtyDr6yUWxQTP9"
      },
  
      {
        id:4,
        imgSrc:img7,
        pname: "St.Philomena's Cathedral",
        location: 'Mysore',
        duration: "11min",
        dis: "4.9km",
        tag: "https://goo.gl/maps/st4KzEo89DGFr4MJA"
      },
  
      {
        id:5,
        imgSrc:img8,
        pname: 'Mysore zoo',
        location: 'Mysore',
        duration: "9min",
        dis: "3.8km",
        tag: "https://goo.gl/maps/91YiQWdh61h4rQRR7"
      },
      
      {
        id:6,
        imgSrc:img9,
        pname: 'Sri Chamundeshwari Temple',
        location: 'Mysore',
        duration: "30min",
        dis: "12km",
        tag: "https://goo.gl/maps/HQ3DRvVBcVPZtAio8"
      },
    
      {
        id:7,
        imgSrc:img10,
        pname: 'Mysuru Railway Museum',
        location: 'Mysore',
        duration: "7min",
        dis: "2.5km",
        tag: "https://goo.gl/maps/NLWwNUz9E3dwZDcF7"
      },
    
      {
        id:8,
        imgSrc:img11,
        pname: 'Jaganmohan Palace Art Gallery ',
        location: 'Mysore',
        duration: "5min",
        dis: "900meter",
        tag: "https://goo.gl/maps/t43tnHGAkfWDZDYj9"
      }
    
    ]



  const stay = [
      {
        id:1,
        imgSrc:img12,
        hname: 'Hotel Mayura Hoysala Mysuru',
        location: 'Mysuru',
        price: '₹2162',
        bed: 2,
        food: 24,
        dis: "2.2km",
        duration: "6mins",
        per: 4,
        tag:"https://goo.gl/maps/BHVj6Hq5MQCR1iY28"
      },
    
      {
        id:2,
        imgSrc:img13,
        hname: 'Hotel Roopa',
        location: 'Mysuru',
        price: '₹1415',
        bed: 2,
        food: 24,
        dis: "850meter",
        duration: "10mins",
        per: 4,
        tag:"https://goo.gl/maps/KoJ6zwCrCawRqZCs9"
      },
    
      {
        id:3,
        imgSrc:img14,
        hname: 'Sandesh Pride',
        location: 'Mysuru',
        price: '₹3095',
        bed: 2,
        food: 24,
        dis: "2.5km",
        duration: "7mins",
        per: 4,
        tag:"https://goo.gl/maps/ohSc4jqbJZkp8CY5A"
      }
    ]





  return (
    <>
    <Navbar />

    <section className='mysore'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              MYSORE PALACE
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
          The Mysore Palace is a true gem of India's architectural heritage, with its intricate carvings, detailed paintings, and majestic domes.          </p>
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
              Mysore Palace, also known as the Amba Vilas Palace, is a magnificent palace located in the city of Mysore in the southern Indian state of Karnataka. The palace was originally built in the 14th century and was later rebuilt and expanded by the Wodeyar dynasty in the early 20th century. The palace is a stunning example of Indo-Saracenic architecture, blending traditional Indian, Islamic, and European styles.<br/><br/>

                The palace is famous for its intricate carvings, detailed paintings, and majestic domes. It features several courtyards, gardens, and ornate halls, including the Durbar Hall, which was used for official ceremonies and receptions. The palace also houses a museum that displays the royal family's collection of weapons, costumes, and artworks.<br/><br/>

                The palace is lit up with thousands of lights during the annual Dasara festival, which celebrates the victory of good over evil. The festival is a major attraction, drawing visitors from all over the world.<br/><br/>

                The palace is surrounded by a large moat and is situated in the heart of the city. Visitors can take a tour of the palace and explore its many halls and gardens. The palace is also a popular destination for photographers and history buffs.<br/><br/>

                The palace has played an important role in the history of Mysore and Karnataka. It was the residence of the Wodeyar dynasty and served as the seat of the Kingdom of Mysore until the mid-20th century. Today, it is a symbol of the cultural and artistic achievements of the region and a source of pride for the people of Mysore.<br/><br/>
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

export default mysore
