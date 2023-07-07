import React, { useState } from 'react'
import "./NavbarStyles.css"
import { MenuItems } from './MenuItems'

const Navbar = () => {
    const [clicked,setClicked] = useState(false)
    const handleClick = event =>{
        setClicked(current => !current)
    }
    
    return (

        <nav className='NavbarItems'>
            <div className='navbar-logo'>
              <a  href='/'><img src="logo192.png" alt='logo'  />Medantrik</a>   
            </div>
           <div className="menu-icons" onClick={handleClick}>
            <i className={clicked ? "fas fa-times": "fas fa-bars"} ></i>
           </div>
            
            <ul className={clicked ? "nav-menu active": "nav-menu"} onClick={handleClick}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}><i className={item.icon}></i>{item.title}</a>
                        </li> 
                    )
                })}
                
            </ul>
            <button >Sign Up</button>
        </nav>
    )
}

export default Navbar