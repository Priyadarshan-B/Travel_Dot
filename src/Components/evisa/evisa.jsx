import React from 'react'
import Navbar from '../Navbar1/Navbar'
import Footer from '../Footer/Footer'
import {BsArrowRightShort} from 'react-icons/bs'
import './evisa.css'


const evisa = () => {
  return (
    <>
    <Navbar />

    <section className='visa'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
              VISA
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
              <p>All foreign nationals entering India are required to possess a valid international travel document in the form of a national passport with a valid visa obtained from an Indian Mission or Post abroad. Tourist Visa can only be granted to a foreigner who does not have a residence or occupation in India and whose sole objective of visiting India is recreation, sight seeing, casual visit to meet friends and relatives, etc.</p><br /><br />
              <h2 className="secTitle">
              Eligibility<br /><br />
              </h2>
              <p>
              International Travellers whose sole objective of visiting India is recreation , sight seeing , casual visit to meet friends or relatives, short duration medical treatment or casual business visit.<br /><br />

Passport should have at least six months validity from the date of arrival in India. The passport should have at least two blank pages for stamping by the Immigration Officer.<br /><br />

International Travellers should have return ticket or onward journey ticket,with sufficient money to spend during his/her stay in India.<br /><br />

International Travellers having Pakistani Passport or Pakistani origin may please apply for regular Visa at Indian Mission.<br /><br />

Not available to Diplomatic/Official Passport Holders or Laissez-passer travel document holders.<br /><br />

Not available to individuals endorsed on Parent's/Spouse's Passport i.e. each individual should have a separate passport.<br /><br />

Not available to International Travel Document Holders.<br /><br />
              </p>
          </div>
        </div>
        <br/><br/>

        <a href='https://indianvisaonline.gov.in/index.html' target='_blank'>
        <button className='btn flex'>Apply Online
            <BsArrowRightShort className='icon'/>
        </button>
        </a>

        </div>
    </section>



    <Footer />

    </>
  )
}

export default evisa
