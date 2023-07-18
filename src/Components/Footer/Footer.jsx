import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className='flex'>
              <SiYourtraveldottv className='icon'/>
              Dot
              </h1>
            </a>
          </div>

          <div className="socials flex">
            <a target='_blank' href="https://www.instagram.com/travel__dot__/"><BsInstagram className='icon'/></a>
            <a target='_blank' href="https://www.facebook.com/people/Payanam-Dot/pfbid0dxe75X7tLxeeNhDiNHCtdvL3HVLiErqHSAovt6GTfpeECYVVsWUYEFMQWrkb3TnPl/"><ImFacebook className='icon'/></a>
            <a target='_blank' href="https://twitter.com/travel__dot__"><BsTwitter className='icon'/></a>
          </div>

        </div>


        <div className="footerLinks">
          <span className='linkTitle'>
            Information
          </span>
          <li>
          <Link to="/home" className='navLink'>Home</Link>
          </li>
          <li>
          <Link to="/destiny" className='navLink'>Explore</Link>
          </li>
          <li>
          <Link to="/pack" className='navLink'>Packages</Link>
          </li>
          <li>
          <Link to="/blog" className='navLink'>Blog</Link>
          </li>
        </div>


        <div className="footerLinks">
          <span className='linkTitle'>
            About Travel
          </span>
          <p className='para'>"Smart travel made easy. Personalized, sustainable, and unforgettable experiences await."</p>
        </div>



        <div className="footerLinks">
          <span className='linkTitle'>
            Contact Us
          </span>
          <span className="phone"><a href="tel:9876543216">9876543216</a></span>
          <span className="email"><a href = "mailto:traveldotbit@gmail.com">traveldotbit@gmail.com</a></span>
        </div>



      </div>
    </div>
  )
}

export default Footer
