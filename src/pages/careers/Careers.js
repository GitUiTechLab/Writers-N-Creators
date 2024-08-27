import React from 'react'
import "./Careers.css";
import Greetings from '../../components/Greetings/Greetings';
import CareersHeroSection from "../../components/careersHeroSection/CareersHeroSection.jsx"

const careersCards = [
  {
    id: 1,
    title: "Accountant",
    para: "Lorem ipsum dolor sit amet consectetur. Donec aliquam posuere tristique et eleifend. Viverra cras felis turpis eget augue.",
    timePeriod: "Full time",
    openings: "2-4 yr Exp",
    experience: "2 Openings",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    para: "Lorem ipsum dolor sit amet consectetur. Donec aliquam posuere tristique et eleifend. Viverra cras felis turpis eget augue.",
    timePeriod: "Full time",
    openings: "2-4 yr Exp",
    experience: "2 Openings",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    para: "Lorem ipsum dolor sit amet consectetur. Donec aliquam posuere tristique et eleifend. Viverra cras felis turpis eget augue.",
    timePeriod: "Full time",
    openings: "2-4 yr Exp",
    experience: "2 Openings",
  },
]

const Careers = () => {
  return (
    <div>
      <CareersHeroSection />
      <div className="careers-main-container">
        <h1 className="careers-main-head">Become a part of the Writers N Creators team.</h1>
        <p className="careers-main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="careers-content-form">
        {careersCards.map(each => (
          <div className="careers-content-container">
            <h1 className="careers-content-head">{each.title}</h1>
            <p className="careers-content-para">{each.para}</p>
            <div className="careers-time-exp-open-container">
              <h1>{each.timePeriod}</h1>
              <h1>{each.experience}</h1>
              <h1>{each.openings}</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: "10px" }}>
              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
      <Greetings />
    </div>
  )
}

export default Careers