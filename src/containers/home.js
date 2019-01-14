import React, { Component } from 'react'
import Header from '../components/navbar'
import PortfolioContainer from '../containers/portfolioContainer'
import About from '../components/about'
import '../css/home.css'
const Home = () => {
  return(
    <div>
    <Header />
    <div className='wrapper'>
      <About />
    </div>
    <div className='wrapper'>

      </div>
    </div>
  )
}

export default Home
