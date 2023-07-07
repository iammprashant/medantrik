import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/contact.jpg'
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid" heroImg={AboutImg} 
      title="Contact Us" 
      url="/" btnClass="hide"/>
      <Footer/>
    </>
  )
}

export default Contact