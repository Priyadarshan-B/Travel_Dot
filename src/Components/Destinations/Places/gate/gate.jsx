import React from 'react'
import { Link } from 'react-router-dom'
import '../../../Navbar/navbar.css'
import '../../../Home/home.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../../../Navbar1/Navbar'
import Footer from '../../../Footer/Footer'
import '../../../Popular/popular.css'
import '../../../Gallery/gallery.css'
import '../../../Offers/offers.css'
import './gate.css'

import img1 from '../../../../Assests/Gateway/e5.jpg'
import img2 from '../../../../Assests/Gateway/e7.jpg'
import img3 from '../../../../Assests/Gateway/e3.jpg'
import img0 from '../../../../Assests/Gateway/e2.jpg'

import {BsPersonFill} from 'react-icons/bs'
import {GiDuration} from 'react-icons/gi'
import {MdModeOfTravel} from 'react-icons/md'
import {IoFastFoodOutline} from 'react-icons/io5'
import img4 from '../../../../Assests/NBG/a1.jpg'
import img5 from '../../../../Assests/NBG/a2.jpg'
import img6 from '../../../../Assests/NBG/a3.jpg'
import img7 from '../../../../Assests/NBG/a4.jpg'
import img8 from '../../../../Assests/NBG/a5.jpg'
import img9 from '../../../../Assests/NBG/a6.jpg'
import img10 from '../../../../Assests/NBG/a7.jpg'
import img11 from '../../../../Assests/NBG/a8.jpg'
import img12 from '../../../../Assests/NBG/a9.jpg'
import img13 from '../../../../Assests/NBG/a10.jpg'
import img14 from '../../../../Assests/NBG/a11.jpg'





const gate = () => {


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
        pname: 'Kanheri Caves',
        location: 'Mumbai',
        duration: "1hr",
        dis: "40km",
        tag: "https://goo.gl/maps/BE55Xwae5R46UJYf6"
      },
    
      {
        id:2,
        imgSrc:img5,
        pname: "Elephanta Caves",
        location: 'Mumbai',
        duration: "20min",
        dis: "2km",
        tag: "https://goo.gl/maps/b7oi65GCsKNbxxGP9"
      },
    
      {
        id:3,
        imgSrc:img6,
        pname: 'Chhatrapati Shivaji Maharaj Terminus',
        location: 'Mumbai',
        duration: "11min",
        dis: "3km",
        tag: "https://goo.gl/maps/xkiEhk9bHDUwr4rY9"
      },
  
      {
        id:4,
        imgSrc:img7,
        pname: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya',
        location: 'Mumbai',
        duration: "14min",
        dis: "1km",
        tag: "https://goo.gl/maps/ihzZrvDbHyaGdnaR9"
      },
  
      {
        id:5,
        imgSrc:img8,
        pname: 'Sanjay Gandhi National Park',
        location: 'Mumbai',
        duration: "1hr",
        dis: "40km",
        tag: "https://goo.gl/maps/VKGt6evBYwgy5vvs5"
      },
      
      {
        id:6,
        imgSrc:img9,
        pname: 'Shree Siddhivinayak Temple',
        location: 'Mumbai',
        duration: "40min",
        dis: "15km",
        tag: "https://goo.gl/maps/FAFyBUEp9NYNkymR7"
      },
    
      {
        id:7,
        imgSrc:img10,
        pname: 'Haji Ali Dargah',
        location: 'Mumbai',
        duration: "22min",
        dis: "8.7km",
        tag: "https://goo.gl/maps/JDgi5PU4gPccZ7xQ9"
      },
    
      {
        id:8,
        imgSrc:img11,
        pname: 'Juhu Beach',
        location: 'Mumbai',
        duration: "50min",
        dis: "27km",
        tag: "https://goo.gl/maps/ReZDmCjiXYmrG8nGA"
      }
    
    ]



  const stay = [
      {
        id:1,
        imgSrc:img12,
        hname: 'Taj Mahal Tower, Mumbai',
        location: 'Mumbai',
        price: '₹16053',
        bed: 2,
        food: 24,
        dis: "650meter",
        duration: "8mins",
        per: 4,
        tag:"https://goo.gl/maps/9XGM9qma8mywHZKz8"
      },
    
      {
        id:2,
        imgSrc:img13,
        hname: 'The Gordon House Hotel',
        location: 'Mumbai',
        price: '₹6900',
        bed: 2,
        food: 24,
        dis: "600meter",
        duration: "8mins",
        per: 4,
        tag:"https://goo.gl/maps/vnUBMuoSuoVPHZwd8"
      },
    
      {
        id:3,
        imgSrc:img14,
        hname: 'Abode Bombay',
        location: 'Mumbai',
        price: '₹5040',
        bed: 2,
        food: 24,
        dis: "650meter",
        duration: "9mins",
        per: 4,
        tag:"https://goo.gl/maps/jJ1GctHrtNqPwE7ZA"
      }
    ]

      




  return (
    <>
    <Navbar />

    <section className='gate'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              GATEWAY OF INDIA
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
          "The Gateway of India is one of the most recognized landmarks of Mumbai, and a must-visit destination for anyone visiting the city."          </p>
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
              The Gateway of India is an iconic monument located in Mumbai, India. It was built in 1924 to commemorate the visit of King George V and Queen Mary to India.<br/><br/>

                The Gateway of India is built in the Indo-Saracenic style, a blend of Indian, Islamic, and European architectural styles. It is made of yellow basalt and reinforced concrete, and stands at a height of 26 meters.<br/><br/>

                The monument is located at the waterfront of Mumbai Harbor, and is one of the city's most recognizable landmarks. It has served as a symbol of India's connection with the rest of the world, as it was the first structure that travelers arriving by sea would see.<br/><br/>

                The Gateway of India has played an important role in India's history, including serving as the site of the ceremonial departure of the last British troops from India in 1948. It has also been the site of several important political and cultural events.<br/><br/>

                Visitors can take a boat ride from the Gateway of India to Elephanta Island, which is home to the Elephanta Caves, a UNESCO World Heritage Site.<br/><br/>

                The monument is illuminated at night, making it a popular spot for evening strolls and photography. It is also a popular destination for street performers, food vendors, and local artisans selling their wares.<br/><br/>

                Overall, the Gateway of India is a must-visit destination for anyone traveling to Mumbai. Its stunning architecture and rich history make it a symbol of India's cultural heritage and a testament to the city's resilience and spirit.<br/><br/>

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

export default gate
