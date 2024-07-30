import React from 'react'

import "./contentWrittingPage.css";
import AllMaterials from '../../shared/allMaterials/AllMaterials';
import { contentWrittingContent } from '../../constatnts';

const ContentWrittingPage = () => {
  return (
    <div className='content-writting-page padding'>
      <div className='content-writting-header'>Content Writing</div>
      <div className='overview'>
        <div className='overview-header'>Overview</div>
        <div className='overview-content'>
        At Writers N Creators, we specialize in crafting compelling scripts that bring important stories to life. One of our notable projects is the script writing <br />
        for a short film on Panchayati Raj, undertaken for the BGSYS, Panchayati Raj Department, Government of Bihar.
        </div>
      </div>
      <AllMaterials data = {contentWrittingContent} />
    </div>
  )
}

export default ContentWrittingPage