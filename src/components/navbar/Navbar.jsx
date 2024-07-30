import React from 'react'
import Logo from "../../assets/weitersNcreators 2.png";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={Logo} width={164} height={66} alt="logo" />
        </div>
        <div className='navbar-links'>
            {["About Us", "Services", "Portfolio","Testimonials"].map((link,idx) => {
                return (
                    <div key={idx} className='navbar-link p-2 text-[18px]'>{link}</div>
                )
            })}
        </div>
        <div className='contact-us-btn'>
            <button className='outline-none'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar