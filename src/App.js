import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import Intro from './components/intro'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import PortfolioContainer from './containers/portfolioContainer'
import Home from './containers/home'
import ResumeContainer from './containers/resumeContainer'
class App extends Component {


  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Intro}/>
          <Route exact path='/home' component={Home} />
          <Route exact path='/portfolio' component={PortfolioContainer} />
          <Route exact path='/resume' component={ResumeContainer} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
