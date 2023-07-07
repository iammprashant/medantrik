import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/2.jpg'
import Footer from '../components/Footer';

const Product = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid" heroImg={AboutImg} 
      title="Our Products" 
      url="/" btnClass="hide"/>
      <Footer/>
    </>
  )
}

export default Product