import React from 'react'
import "../careers/Careers.css";
import Greetings from '../../components/Greetings/Greetings.js';
import BlogsHeroSection from "../../components/BlogsHeroSection/BlogsHeroSection.jsx";
import BlogImage from "../../images/BlogImage.png";
import "./Blogs.css"

const blogData = [
  {
    id: 1,
    image: BlogImage,
    admin: "By Admin",
    date: "Jan 06,2024",
    content: "Lorem ipsum dolor si ipsum dolor si"
  },
  {
    id: 2,
    image: BlogImage,
    admin: "By Admin",
    date: "Jan 06,2024",
    content: "Lorem ipsum dolor si ipsum dolor si"
  },
  {
    id: 3,
    image: BlogImage,
    admin: "By Admin",
    date: "Jan 06,2024",
    content: "Lorem ipsum dolor si ipsum dolor si"
  },
  {
    id: 4,
    image: BlogImage,
    admin: "By Admin",
    date: "Jan 06,2024",
    content: "Lorem ipsum dolor si ipsum dolor si"
  },
  {
    id: 5,
    image: BlogImage,
    admin: "By Admin",
    date: "Jan 06,2024",
    content: "Lorem ipsum dolor si ipsum dolor si"
  },
  {
    id: 6,
    image: BlogImage,
    admin: "By Admin",
    date: "Jan 06,2024",
    content: "Lorem ipsum dolor si ipsum dolor si"
  },
]

const Careers = () => {
  return (
    <div>
      <BlogsHeroSection />
      <div className="careers-main-container">
        <h1 className="careers-main-head">About  Writers n creators Latest Blogs</h1>
        <p className="careers-main-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="card-list-container">
        {blogData.map(each => (
          <div key={each.id} className="card-list">
            <img src={each.image} className="card-image" />
            <div className="card-image-date-admin-container">
              <p>{each.admin}</p>
              <p>{each.date}</p>
            </div>
            <p className="card-main-para">{each.content}</p>
          </div>
        ))}
      </div>
      <Greetings />
    </div>
  )
}

export default Careers