import React from 'react'
import { Button } from 'react-bootstrap'
import '../css/intro.css'
import '../css/animate.css'
import { Link } from 'react-router-dom'
const Intro = () => {

  return(
    <div>
      <div className='backgroundImg'>
        <div className='introContainer animated bounceInUp'>
          <h1 className='hello'>Hi, I'm Giles Bonner</h1>
          <h3 className='align'><Link to={'/home'}><button className='enter'>enter</button></Link></h3>
        </div>
      </div>
    </div>
  )
}

export default Intro
