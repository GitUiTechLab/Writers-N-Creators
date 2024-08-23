import React, { useState } from "react";
import TestimonialImage from "../../assets/testimonial_image.png";
import PlayBtnIcon from "../../assets/icons/play_btn_icon.png";
import LeftArrow from "../../assets/icons/arrow_left_icon.png";
import ClientImage from "../../assets/testimonial_client_img.jpg";
import RightArrow from "../../assets/icons/arrow_right_icon.png";

const testimonials = [
  {
    image: TestimonialImage,
    clientImage: ClientImage,
    name: "Jenny Wilson",
    position: "Vice President",
    testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing
    elit.`,
    additionalText: `Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniamLorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolor.`,
  },
  // Duplicate for simplicity, but replace with actual data
  {
    image: TestimonialImage,
    clientImage: ClientImage,
    name: "John Doe",
    position: "CEO",
    testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    additionalText: `Lorem ipsum tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: TestimonialImage,
    clientImage: ClientImage,
    name: "Alice Johnson",
    position: "Marketing Head",
    testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    additionalText: `Lorem ipsum tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: TestimonialImage,
    clientImage: ClientImage,
    name: "Michael Brown",
    position: "Product Manager",
    testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    additionalText: `Lorem ipsum tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const HomeTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="home-testimonials flex flex-col items-center">
      <div className="section-sub-header text-[40px] font-semibold text-[#545454] mb-8">
        Testimonials
      </div>
      <div className="flex justify-between items-center w-full max-w-[1200px] h-[600px]">
        {/* Image Section */}
        <div className="relative flex-1 mr-0 h-full">
          <img
            src={testimonials[currentSlide].image}
            alt="testimonial-image"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <img
              src={PlayBtnIcon}
              width={78}
              height={78}
              className="rounded-full"
              alt="play-btn"
            />
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <img src={LeftArrow} width={60} height={60} alt="left-arrow" />
          </button>
        </div>

        {/* Text Section */}
        <div className="relative flex-1 p-8 bg-white rounded-lg shadow-lg h-full flex flex-col">
          <div className="text-[40px] font-playfairDisplay font-bold text-[#C48900] mb-4">
            Happy customers
          </div>
          <div className="flex items-center mb-4">
            <img
              src={testimonials[currentSlide].clientImage}
              alt={testimonials[currentSlide].name}
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-[#222222]">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-sm text-[#666666]">
                {testimonials[currentSlide].position}
              </p>
            </div>
          </div>
          <h2 className="text-md text-black mb-0 flex-grow">
            {testimonials[currentSlide].testimonial}
          </h2>
          <h2 className="text-md text-black flex-grow">
            {testimonials[currentSlide].additionalText}
          </h2>
          <div
            className="absolute text-[#F2C94C] text-[80px] font-bold"
            style={{ top: "-40px", right: "20px" }}
          >
            &quot;
          </div>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <img src={RightArrow} width={60} height={60} alt="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
