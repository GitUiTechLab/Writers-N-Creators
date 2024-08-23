import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Importing images directly
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

const HomeHeroSection = () => {
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
      header: "Upcoming Event: Bihar Poultry and Aqua Expo 2024",
      subHeader:
        "Join us on September 12-14, 2024, at Gyan Bhawan, Patna, for an event that celebrates innovation and excellence in poultry and aquaculture. Don't miss out on this exciting opportunity!",
    },
    {
      image: hero2,
      header: "Past Events: Bihar Poultry and Aqua Expo 2019",
      subHeader:
        "Relive the moments of our past events where innovation, creativity, and excellence took center stage. Witness the impactful experiences and memorable highlights that have defined our journey.",
    },
    {
      image: hero3,
      header: "Past Events: Bihar Poultry and Aqua Expo 2022",
      subHeader:
        "Step back into the excitement and inspiration of our previous events. Discover the key highlights and unforgettable experiences that have shaped our legacy of excellence and innovation",
    },
    {
      image: hero4,
      header: "Past Event: Bihar Dairy and Cattle Expo 2023",
      subHeader:
        "Explore the highlights and unforgettable moments from our previous events. Experience the excitement, innovation, and lasting impact that continue to inspire us",
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
            <p style={{ fontSize: "20px", margin: "10px 0 0 0" }}>
              {slide.subHeader}
            </p>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "18px",
                border: "none",
                height: "4rem",
                width: "14rem",
                borderRadius: "8px",
                backgroundColor: "white",
                border: "2px solid #A67B05",
                color: "#A67B05",
                cursor: "pointer",
              }}
            >
              Explore Our Services
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default HomeHeroSection;
