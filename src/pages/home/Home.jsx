import React from "react";
// import HeroSection from '../../components/heroSection/HeroSection'
// import ContentWritting from '../../components/contentWritting/ContentWritting'
// import GetInTouch from '../../components/getInTouch/GetInTouch'
// import Footer from '../../components/footer/Footer'
// import IecContent from '../iecContent/IecContent'
// import ContentWrittingPage from '../contentWritting/ContentWrittingPage'
// import WncHomeCreation from '../wncHomeCreaation/WncHomeCreation'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  HomeHeroSection,
  HomeAboutUs,
  HomePortfolioSection,
  HomeWhyChooseUs,
  ContactUs,
  HomeTestimonials,

} from "../../components";
import HomeServicesSection from "../../components/homeServicesSection/HomeServicesSection";

const Home = () => {
  return (
    <div className="home-container">
      <HomeHeroSection />
      <div className="home-section-container px-0">
        <HomeAboutUs />
      </div>
      <div className="home-portfolio-section-container px-0 py-10">
        <HomePortfolioSection />
      </div>
      <div className="home-sevices-section-container px-0 py-10">
        <HomeServicesSection />
      </div>
      <div className="home-why-choose-us-container px-0 py-5">
        <HomeWhyChooseUs />
      </div>
      <div className="home-testimonials-section px-0 py-10">
        <HomeTestimonials />
      </div>
      <div className="home-contact-us-section px-20 py-10">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
