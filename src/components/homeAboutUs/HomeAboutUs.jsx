import React from 'react'
import WritersNCreators from "../../assets/writers_n_creators_about_us.png";
import "./homeAboutUs.css";

const HomeAboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-6 lg:p-12 home-about-us-container">
      {/* Left Section */}
      <div className='about-us-section flex-1'>
             <div className='header'>About Us</div>
            <div className='sub-header'>
           Introducing Writers N Creators
            </div>
    
          <p className='content'>
            Writers N Creators is an innovative event and content creation agency that specializes in delivering top-notch written material and organizing memorable events. 
           With a team of skilled writers, editors, and event planners and with a focuson originality and creativity,
           the agency prides itself on producing high-quality content that resonates with audiences and creating experiences 
           that leave lasting impressions. Whether it's crafting compelling write-ups, engaging audio-video pieces, or orchestrating seamless events, 
          Writers N Creators is dedicated to excellence. The agency's commitment to quality and creativity ensures that each project is not just completed, 
             but brought to life with a unique flair that sets it apart in the bustling world of content creation and event management.
            </p>
            <button className="bg-sceondaryFontColor text-white font-normal font-inter py-2 px-4 rounded hover:bg-yellow-700">
          Learn more
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 lg:h-full  flex items-center justify-center">
        <img
          src={WritersNCreators}
          alt="Writers N Creators"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>
    </div>
    
  )
}

export default HomeAboutUs