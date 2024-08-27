import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Importing images directly
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

const CareersHeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const slidesData = [
    {
      image: hero1,
      header: "Careers",
    },
    {
      image: hero2,
      header: "Careers",
    },
    {
      image: hero3,
      header: "Careers",
    },
    {
      image: hero4,
      header: "Careers",
    },
  ];

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} style={{}}>
          <div
            style={{
              position: "relative",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "40px", margin: "0" }}>{slide.header}</h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default CareersHeroSection;
