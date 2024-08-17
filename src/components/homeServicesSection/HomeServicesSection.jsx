import React from 'react'
import { HomeServiceSectionContent } from '../../constatnts'

const HomeServicesSection = () => {
  return (
    <div className='home-services-section bg-home_services_bg_image flex justify-center items-center flex-col bg-cover'>
        <div className='section-header'>Sevices</div>
        <div className='section-sub-header'>
            What We Offer
        </div>
        <div className='content grid grid-cols-3 '>
            {HomeServiceSectionContent.map((each,idx) => {
                return (
                    <div className='each-card relative m-4' key={idx}>
                        <img src={each.image} width={400} height={220} alt={each.header} />
                        <div className='absolute bg-textWhite text-center text-contactUsBtnColor text-[18px] font-inter bottom-4 p-4 left-10 border-[1px] border-contactUsBtnColor rounded-[10px] w-[301px] h-[62px]'>
                            {each.header}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default HomeServicesSection