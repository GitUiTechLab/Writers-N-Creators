import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import ContentWritting from '../../components/contentWritting/ContentWritting'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import Footer from '../../components/footer/Footer'
import IecContent from '../iecContent/IecContent'
import ContentWrittingPage from '../contentWritting/ContentWrittingPage'
import WncHomeCreation from '../wncHomeCreaation/WncHomeCreation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <ContentWritting />
    </div>
  )
}

export default Home