import React from 'react'
import Navbar from '../Navbar1/Navbar';
import Home from '../Home/Home';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import './main.css'


const main = () => {
  
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  )
}

export default main
