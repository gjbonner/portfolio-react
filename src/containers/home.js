import React, { Component } from 'react'
import Header from '../components/navbar'
import PortfolioCard from '../components/portfolioCard'
import About from '../components/about'
const PortfolioContainer = () => {
  return(
    <div>
      <Header />
      <About />
      <PortfolioCard />
    </div>
  )
}

export default PortfolioContainer
