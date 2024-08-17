import React from 'react'
import "./imageCard.css";
const ImageCard = ({image, header}) => {
  return (
    <div className='image-card'>
        <div className='img-container'>
            <img src={image} width={353} height={242} alt={header} />
        </div>
        <div className='img-header'>
            {header}
        </div>
    </div>
  )
}

export default ImageCard