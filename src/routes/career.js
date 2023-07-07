import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/night.jpg'

const Career = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid" heroImg={AboutImg} 
      title="About Us" 
      url="/" btnClass="hide"/>
    </>
  )
}

export default Career