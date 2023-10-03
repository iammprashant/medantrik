import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutImg from '../assets/night.jpg'
import Aboutus from '../components/AboutUs'


const about = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid" heroImg={AboutImg} 
      title="About Us" 
      url="/" btnClass="hide"/>
    <Aboutus/>
    <Footer/>
    </>
  )
}

export default about