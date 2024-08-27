import React from 'react'
import Flower1 from "../../images/Flower1.png";
import Flower2 from "../../images/Flower2.png";
import {Link} from "react-router-dom";
import "./Greetings.css";

const Greetings = () => {
    return (
        <div className="portfolio-get-in-touch-container">
            <img src={Flower1} className="portfolio-get-in-touch-image1" alt="Flower1" />
            <div className="portfolio-get-in-touch">
                <h1 className="portfolio-get-in-touch-head">Get in Touch for Your Print & Production Needs</h1>
                <p className="portfolio-get-in-touch-para">At Writers N Creators, we're dedicated to delivering exceptional print and production services tailored to your unique requirements. Whether you need brochures, leaflets, magazines, or any other printed materials, our team is here to bring your vision to life with creativity and precision.</p>
                <Link to="/contact-us"><button className="portfolio-get-in-touch-button">Contact Us</button></Link>
            </div>
            <img src={Flower2} className="portfolio-get-in-touch-image2" alt="Flower2" />
        </div>
    )
}

export default Greetings