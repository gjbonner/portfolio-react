import React from 'react'
import '../css/footer.css'
const Footer = () => {
  return(
    <div>
      <div className='footer'>
        <ul className='footerIcons'>
          <li><a href='https://github.com/gjbonner'><i class="icons fab fa-github"></i></a></li>
          <li></li>
          <li><a href='https://www.linkedin.com/in/giles-bonner-b74babb9/'><i class="icons fab fa-linkedin-in"></i></a></li>
          <li></li>
          <li><a href='https://www.youtube.com/channel/UCKDzi2Y_ZqIyfkwiD6xVgzQ'><i class="icons fab fa-youtube"></i></a></li>
          <li></li>
        </ul>
      </div>
      <div className='made'>
        <p>Made with <i class="heart fas fa-heart"></i> by Giles Bonner</p>
      </div>
    </div>
  )
}

export default Footer
