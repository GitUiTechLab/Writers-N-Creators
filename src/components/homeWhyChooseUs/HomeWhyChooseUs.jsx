import React from 'react'
import { WhyChooseUsContent } from '../../constatnts'
const HomeWhyChooseUs = () => {
  return (
    <div className='home-why-choose-us-container flex justify-center items-center flex-col'>
        <div className='section-sub-header my-5'>
            Why Choose Us ?
        </div>
        <div className='content bg-why_choose_us_bg_image bg-cover'>
        <div className=" px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 gap-8">
                    {WhyChooseUsContent.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0">
                                <img src={item.image} alt={item.header} className="h-[100px] w-[100px] rounded-full p-2" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-[32px] font-[600px] text-primaryFontColor font-inter">{item.header}</h3>
                                <p className="mt-2 text-primaryFontColor text-[16px] font-normal">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeWhyChooseUs