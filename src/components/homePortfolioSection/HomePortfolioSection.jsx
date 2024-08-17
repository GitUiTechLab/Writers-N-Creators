import React from 'react'
import { HomePortfolioContent } from '../../constatnts'
import ImageCard from '../../shared/imageCrads/ImageCard';
import { useNavigate } from 'react-router-dom';

const HomePortfolioSection = () => {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate("/portfolio");
    }
    return (
        <div className='home-portfolio-section flex items-center flex-col justify-center'>
            <div className='section-header'>Portfolio</div>
            <div className='section-sub-header'>
            Past Project Highlights
            </div>
            <div className='content flex justify-between items-center'>
                {HomePortfolioContent.map((each,idx) => {
                    const{ image, header} = each;
                    return (
                        <div className='each-card p-4' key={idx}>
                            <ImageCard  image={image} header={header} />
                        </div>
                    )
                })}
            </div>
            <button className='btn-container' onClick={handleChange}>Learn More</button>
        </div>
    )
}

export default HomePortfolioSection