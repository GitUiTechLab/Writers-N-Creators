import React from 'react'
import AboutUsImage from "../../images/AboutUsImage.png";
import "./AboutUs.css";
import Greetings from '../../components/Greetings/Greetings';

const aboutUsContent = [
  {
    title: "About Us",
    para1: "Writers N Creators is an innovative event and content creation agency that specializes in delivering top-notch written material and organizing memorable events. With a team of skilled writers, editors, and event planners and with a focuson originality and creativity, the agency prides itself on producing high-quality content that resonates with audiences and creating experiences that leave lasting impressions. Whether it's crafting compelling write-ups, engaging audio-video pieces, or orchestrating seamless events, Writers N Creators is dedicated to excellence. The agency's commitment to quality and creativity ensures that each project is not just completed, but brought to life with a unique flair that sets it apart in the bustling world of content creation and event management.",
    para2: "",
  },
  {
    title: "Our Commitment",
    para1: "At Writers N Creators, we are dedicated to quality and creativity. Each project we undertake is brought to life with a unique flair that sets us apart from the competition. We take pride in our meticulous approach to planning and execution, ensuring that every detail is perfect. Our commitment to excellence guarantees that every project is not just completed, but exceeds expectations",
    para2: "",
  },
  {
    title: "Our Impact",
    para1: "Over the years, Writers N Creators has built a strong reputation for excellence in the content creation and event management industries. Our portfolio of successful projects is a testament to our ability to deliver outstanding results. Whether you need compelling content, expertly planned events, or impactful media production, Writers N Creators is your go-to agency. ",
    para2: "Join us on a journey of creativity and excellence. Let Writers N Creators bring your vision to life with unparalleled skill and dedication."
  }
]

const AboutUs = () => {
  return (
    <div className="about-us-main-container">

      <div className="about-us-image-alignment">
        <img src={AboutUsImage} alt="About Us" />
        <h1 className="about-us-main-head">About Us</h1>
      </div>

      <div>
        {aboutUsContent.map(each => (
          <div className="about-us-content-container">
            <h1 className="about-us-content-container-head">{each.title}</h1>
            <p className="about-us-content-container-para">{each.para1}</p>
            <p className="about-us-content-container-para para2">{each.para2}</p>
          </div>
        ))}
        <Greetings />
      </div>

    </div>
  )
}

export default AboutUs