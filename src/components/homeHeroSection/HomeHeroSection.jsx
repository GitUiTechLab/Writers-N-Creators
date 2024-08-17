import React from 'react'
import "./homeHeroSection.css";

const HomeHeroSection = () => {
  return (
    <div className='home-hero-section'>
        <div className='header'>
        "Upcoming Event: Bihar Poultry and Aqua Expo 2024"
        </div>
        <div className='sub-header'>
        Join us on September 12-14, 2024, at Gyan Bhawan, Patna, for an event that celebrates innovation<br />
         and excellence in poultry and aquaculture. Don't miss out on this exciting opportunity!"
        </div>
        <button className='btn-container'>Know More</button>
    </div>
  )
}

export default HomeHeroSection