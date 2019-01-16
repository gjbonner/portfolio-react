import React from 'react'
import Header from '../components/navbar'
import PortfolioCards from '../components/portfolioCard'
import About from '../components/about'
import Footer from '../components/footer'
import '../css/home.css'
const Home = () => {
  return(
    <div>
    <Header />
    <div className='wrapper'>
      <About />
    </div>
    <div className='wrapper'>
      <PortfolioCards />
      </div>
      <Footer />
    </div>
  )
}

export default Home
