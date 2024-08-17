import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import ContentWritting from '../../components/contentWritting/ContentWritting'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import Footer from '../../components/footer/Footer'
import IecContent from '../iecContent/IecContent'
import ContentWrittingPage from '../contentWritting/ContentWrittingPage'
import WncHomeCreation from '../wncHomeCreaation/WncHomeCreation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeHeroSection, HomeAboutUs, HomePortfolioSection, HomeWhyChooseUs, ContactUs, HomeTestimonials } from '../../components'
import HomeServicesSection from '../../components/homeServicesSection/HomeServicesSection'

const Home = () => {
  return (
    // <div>
    //     <HeroSection />
    //     <ContentWritting />
    // </div>
    <div className='home-container'>
      <HomeHeroSection />
      <div className="home-section-container px-0 py-20">
      <HomeAboutUs />
      </div>
      <div className="home-portfolio-section-container px-0 py-20">
        <HomePortfolioSection />
      </div>
      <div className='home-sevices-section-container px-0 py-10'>
        <HomeServicesSection />
      </div>
      <div className='home-why-choose-us-container px-0 py-10'>
        <HomeWhyChooseUs />
      </div>
      <div className='home-contact-us-section px-0 py-10'>
        <ContactUs />
      </div>
      <div className="home-testimonials-section px-20 py-10">
        <HomeTestimonials />
      </div>
    </div>
  )
}

export default Home