import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./NavbarStyles.css"
import { MenuItems } from './MenuItems'

const Navbar = () => {
    const [clicked,setClicked] = useState(false)
    const handleClick = event =>{
        setClicked(current => !current)
    }

    const navigate = useNavigate();
    const navigateToLogin = ()=>{
        navigate('/signin');
    }
    
    return (

        <nav className='NavbarItems'>
            <div className='navbar-logo'>
              <Link  to='/'><img src="logo192.png" alt='logo'  />Medantrik</Link>   
            </div>
           <div className="menu-icons" onClick={handleClick}>
            <i className={clicked ? "fas fa-times": "fas fa-bars"} ></i>
           </div>
            
            <ul className={clicked ? "nav-menu active": "nav-menu"} onClick={handleClick}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                        </li> 
                    )
                })}
                
            </ul>
            <button onClick={navigateToLogin}>Sign in</button>
        </nav>
    )
}

export default Navbar