import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutImg from '../assets/3.jpg'
import Notes from '../components/Notes';


 const Blog = (props) => {
  const {showAlert} = props;
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid" heroImg={AboutImg} 
      title="Blogs" 
      url="/" btnClass="hide"/> 
    <Notes showAlert= {showAlert}/>   
    <Footer/>
    </>
    
  )
}

export default Blog