import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImg from '../assets/medpic2.jpg'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero cName="hero" heroImg={HomeImg} 
      title="Innovation In HealthCare" text="Technology With a Purpose" buttonText="MedIntro"  url="/" btnClass="show"/>
      <Footer/>
    </>
  )
}

export default Home