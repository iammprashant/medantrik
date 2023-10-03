import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImg from '../assets/medpic2.jpg'
import MTeam from '../assets/mteam.jpg'
import Footer from '../components/Footer';
import Destination from '../components/Destination'
import Trip from '../components/Trip'

const Home = () => {
  
  return (
    <>
      <Navbar/>
      <Hero cName="hero" heroImg={HomeImg} 
      title="Innovation In HealthCare" text="Technology With a Purpose" buttonText="MedIntro"  url="https://youtube.com/shorts/dDE_fAvvTRo?si=hWl4Tx_xaL32b_c5" btnClass="show"/>
      <Destination/>
      <Trip/>
      <img src={MTeam} alt='mteam' ></img>
      <Footer/>
    </>
  )
}

export default Home