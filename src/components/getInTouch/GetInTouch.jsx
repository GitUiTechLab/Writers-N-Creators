import React from 'react'
import GetInTouch1 from "../../assets/bg_image1.png";
import GetInTouch2 from "../../assets/bg_image2.png";

const GetInTouch = () => {
  return (
    <div className='get-in-touch-container'>
        <div className='image1'>
            <img src = {GetInTouch1} width={395} height={128} alt="bg-image" />
        </div>
        <div className='content-header'>
        Get in Touch for Your Print & Production Needs
        </div>
        <div className='content-sub-header mt-8'>
        At Writers N Creators, we're dedicated to delivering exceptional print and production services tailored<br />
         to your unique requirements. Whether you need brochures, leaflets, magazines, or any other printed<br />
          materials, our team is here to bring your vision to life with creativity and precision.
        </div>
        <div className='contact-us-btn mt-8'>
            <button className='outline-none'>Contact Us</button>
        </div>
        <div className='image2'>
            <img src = {GetInTouch2} width={395} height={128} alt="bg-image2" />
        </div>
    </div>
  )
}

export default GetInTouch