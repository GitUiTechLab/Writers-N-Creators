import React from 'react'

import TestimonialImage from "../../assets/testimonial_image.png";
import PlayBtnIcon from "../../assets/icons/play_btn_icon.png";
import LeftArrow from "../../assets/icons/arrow_left_icon.png";
import ClientImage from "../../assets/testimonial_client_img.jpg";
import RightArrow from "../../assets/icons/arrow_right_icon.png";

const HomeTestimonials = () => {
  return (
    <div className='home-testimonials flex justify-center items-center flex-col'>
        <div className='section-sub-header'>Testimonials</div>
        <div className='content w-full flex'>
            <div className='relative w-1/2'>
                <img src={TestimonialImage} width={625} height={599} alt='testimonial-image' />
                <button className='absolute flex inset-0 items-center justify-center'>
                    <img src={PlayBtnIcon} width={78} height={78} className='rounded-full' alt='play-btn' />
                </button>
                <button className='absolute left-0 top-1/2'>
                    <img src={LeftArrow} width={60} height={60} alt='left-arrow' />
                </button>
            </div>
            <div className='w-1/2 p-8 bg-textWhite rounded-[5px] relative'>
                <div className="text-[40px] font-playfairDisplay font-[700px] text-contactUsBtnColor mb-4">Happy customers</div>
                <div className="flex items-center mb-4">
                    <img
                        src={ClientImage}
                        alt="Jenny Wilson"
                        className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-[#222222]">Jenny Wilson</h3>
                        <p className="text-sm text-[#666666]">Vice President</p>
                    </div>
                </div>
                <p className="text-sm text-primaryFontColor mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-sm text-primaryFontColor">
                    Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolor.
                </p>
                <button className='absolute right-0 top-1/2'>
                    <img src={RightArrow} width={60} height={60} alt='right-arrow' />
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default HomeTestimonials