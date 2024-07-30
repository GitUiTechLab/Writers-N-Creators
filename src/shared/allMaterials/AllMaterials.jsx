import React from 'react'

import "./allMaterials.css";

const AllMaterials = ({data}) => {
  return (
    <div className='all-materials'>
        {data.map((each,idx) => {
            const {mainHeader,content} = each;
            return (
                <div key={idx}>
                <div className='header'>{mainHeader}</div>
                <div className='description border-l-[1px] border-black '>
                    {content.map((each) => {
                        const {id, image, header, subHeader} = each;
                        return (
                            <div className='each-description-card' key={id}>
                                <div className='crad-image'>
                                    <img src={image} width={1188} height={339} alt="card-image" />
                                </div>
                                <div className='description'>
                                    <div className='header'>{header}</div>
                                    <div className='subHeader'>{subHeader}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
            )
        })}
    </div>
  )
}

export default AllMaterials