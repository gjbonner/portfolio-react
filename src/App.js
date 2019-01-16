import React, { Component, Fragment } from 'react';
import Intro from './components/intro'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import PortfolioContainer from './containers/portfolioContainer'
import Home from './containers/home'
import ResumeContainer from './containers/resumeContainer'
import ContactContainer from './containers/contactContainer'
class App extends Component {


  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Intro}/>
          <Route exact path='/home' component={Home} />
          <Route exact path='/portfolio' component={PortfolioContainer} />
          <Route exact path='/resume' component={ResumeContainer} />
          <Route exact path='/contact' component={ContactContainer} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
