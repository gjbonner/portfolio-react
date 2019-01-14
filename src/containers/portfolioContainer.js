import React from 'react'
import Header from '../components/navbar'
import PortfolioCard from '../components/portfolioCard'
import About from '../components/about'
const PortfolioContainer = () => {
  return(
    <div>
      <Header />
      <div className='wrapper'>
      <PortfolioCard />
      </div>
    </div>
  )
}

export default PortfolioContainer
