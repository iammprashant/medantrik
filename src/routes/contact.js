import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/contact.jpg'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid" heroImg={AboutImg} 
      title="Contact Us" 
      url="/" btnClass="hide"/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact