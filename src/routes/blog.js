import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutImg from '../assets/3.jpg'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid" heroImg={AboutImg} 
      title="Blogs" 
      url="/" btnClass="hide"/>
    <Footer/>
    </>
    
  )
}

export default Blog