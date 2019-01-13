import React, { Component } from 'react'
import Header from '../components/navbar'
import PortfolioCard from '../components/portfolioCard'
import About from '../components/about'
import '../css/home.css'
const PortfolioContainer = () => {
  return(
    <div>
    <Header />
    <div className='wrapper'>
      <About />
    </div>
    <div className='wrapper'>
      <PortfolioCard />
    </div>
    </div>
  )
}

export default PortfolioContainer
