import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import '../css/nav.css'
const Header = () => {
  return(
    <div>
      <Navbar className="nav" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand  className='name'><Link to='/home'>Giles Bonner</Link></Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
      </Navbar>
    </div>
  )
}

export default Header
