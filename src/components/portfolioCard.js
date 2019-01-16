import React from 'react'
import '../css/portfolioCards.css'
const PortfolioCards = () => {
  return (
    <div>
      <h1>Portfolio</h1>
    <div className='cards'>
      <div className='card'>
        <div className='cardInner'>
          <div className='cardFront'>
            <img className='cardImg' src='https://res.cloudinary.com/dtdt6vcwa/image/upload/v1547654275/whatToMake.png'/>
            <p className='appName'>What To Make</p>
          </div>
          <div className='cardBack'>
            <p>What to make is a React/Redux application
            allowing users to search for recipes via ingredient input.
            Users can also save recipes and filter recipes by allergies. Data comes from
            the Yummly API.
            </p>
            <p className='iconP'><a href='https://github.com/gjbonner/foodie-frontend'><i class="cardIcon fab fa-github"></i></a></p>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='cardInner'>
          <div className='cardFront'>
            <img className='cardImg' src='https://res.cloudinary.com/dtdt6vcwa/image/upload/v1547658341/happy.png'/>
            <p className='appName'>Happy</p>
          </div>
          <div className='cardBack'>
            <p>Happy is a Vanilla JavaScript game I built as DOM manipulation practice.
            With a Rails Back End, users names and scores are kept and top 3 high scores of all users are
            displayed. Collect burgers and avoid incoming emojis!
            </p>
            <p className='iconP'><a href='https://github.com/gjbonner/happy_frontend'><i class="cardIcon fab fa-github"></i></a></p>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='cardInner'>
          <div className='cardFront'>
            <img className='cardImg' src='https://res.cloudinary.com/dtdt6vcwa/image/upload/v1547660673/taskmaster.png'/>
            <p className='appName'>TaskMaster</p>
          </div>
          <div className='cardBack'>
            <p>TaskMaster is designed to be a repository for chores within a household;
            specifically between roommates so that all parties involved can create, read,
            update and delete their chores through CLI</p>
            <p className='iconP'><a href='https://github.com/gjbonner/TaskMaster'><i class="cardIcon fab fa-github"></i></a></p>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='cardInner'>
          <div className='cardFront'>
            <img className='cardImg' src='https://res.cloudinary.com/dtdt6vcwa/image/upload/v1547661787/alexa.png'/>
            <p className='appName'>Car News</p>
          </div>
          <div className='cardBack'>
            <p>An alexa skill written in Python and the Flask Python micro framework that reads the
            top 10 headlines from r/autonews via the
            Reddit API.
            </p>
            <p className='iconP'><a href='https://github.com/gjbonner/car-news'><i class="cardIcon fab fa-github"></i></a></p>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='cardInner'>
          <div className='cardFront'>
            <img className='cardImg' src='https://res.cloudinary.com/dtdt6vcwa/image/upload/v1547663810/particle_echo.jpg'/>
            <p className='appName'>Alexa Fan</p>
          </div>
          <div className='cardBack'>
            <p>Using the IFTTT service, Alexa, a Particle Photon, some relays and the remote for my ceiling fan,
            I now have a fan which can be controlled by Alexa! For those who dont know, the Particle Photon is
            a small wifi development kit.</p>
            <p className='iconP'><a href='https://github.com/gjbonner/alexa-fan'><i class="cardIcon fab fa-github"></i></a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PortfolioCards
