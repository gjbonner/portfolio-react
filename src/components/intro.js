import React, { Component } from 'react'
import '../css/intro.css'
import '../css/animate.css'
const Intro = () => {
  return(
    <div>
      <div className='backgroundImg'>
        <div>
        <div className='animated bounceInUp'>
          <h1 className='hello'>Hi, I'm Giles Bonner.</h1>
        </div>
        <div className='animated bounceInUp delay-0.2s'>
          <h1 className='enter'>sup</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
