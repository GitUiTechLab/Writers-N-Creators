import React from 'react'
import "./iecContent.css";
import { LuDot } from "react-icons/lu";
import { IceMaterialsContent, ourApproachContent } from '../../constatnts';
import AllMaterials from '../../shared/allMaterials/AllMaterials';

const IecContent = () => {
  return (
    <div className='iec-content padding'>
      <div className='iec-content-header'>
      IEC contents for Panchayati Raj Department, Gov <br />of Bihar
      </div>
      <div className='iec-content-overview'>
        <div className='header'>Overview</div>
        <div className='content'>
        Writers N Creators proudly collaborated with the Panchayati Raj Department, Government of Bihar, to develop comprehensive IEC (Information,<br />
         Education, and Communication) materials. Our team worked meticulously to create engaging and informative content designed to educate and <br />
         empower the local communities about the Panchayati Raj system.
        </div>
      </div>
      <div className='iec-content-description mt-10'>
        <div className='header'>Our Approach</div>
        <div className='description border-l-[1px] border-black '>
          {ourApproachContent.map((each,idx) => {
            const {header,image,id,content} = each;
            return (
              <div className={id%2 === 0 ? "even-container": "odd-container"}>
                <div className='image-container flex-1'>
                  <img src={image} width={584} height={339} alt="image-alt" />
                </div>
                <div className={id%2 === 0 ? "desc-container ml-5 flex-1" :"desc-container mr-5 flex-1"}>
                  <div className='desc-header '>{header}</div>
                  <div className='desc-container-content'>
                    {content.map((each) => {
                      return (
                        <div className='each-content  flex justify-start items-start m-2'>
                          <span className='text-[40px]'><LuDot /></span>
                          <span className='font-inter text-contentFontColor text-[24px]'>{each}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <AllMaterials data = {IceMaterialsContent} />
    </div>
  )
}

export default IecContent