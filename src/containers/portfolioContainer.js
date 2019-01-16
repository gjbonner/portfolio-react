import React from 'react'
import Header from '../components/navbar'
import PortfolioCards from '../components/portfolioCard'
import Footer from '../components/footer'
const PortfolioContainer = () => {
  return(
    <div>
      <Header />
      <div className='wrapper'>
      <PortfolioCards />
      </div>
      <Footer/>
    </div>
  )
}

export default PortfolioContainer
