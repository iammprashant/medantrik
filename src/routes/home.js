import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImg from '../assets/1.jpg'
import Footer from '../components/Footer';

const home = () => {
  return (
    <>
      <Navbar/>
      <Hero cName="hero" heroImg={HomeImg} 
      title="Innovation In HealthCare" text="Technology With a Purpose" buttonText="MedIntro"  url="/" btnClass="show"/>
      <Footer/>
    </>
  )
}

export default home