import React, { Component } from 'react'
import '../css/intro.css'
import '../css/animate.css'
const Intro = () => {

  const HandleClick = () => {
    console.log('clicked')
  }
  return(
    <div>
      <div className='backgroundImg'>
        <div className='introContainer animated bounceInUp'>
          <h1 className='hello'>Hi, I'm Giles Bonner</h1>
          <h3 className='align'><button onClick={HandleClick} className='enter'>enter</button></h3>
        </div>
      </div>
    </div>
  )
}

export default Intro
