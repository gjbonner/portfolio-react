import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import '../css/nav.css'
const Header = () => {
  return(
    <div>
      <Navbar className="nav" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand  className='name'><Link to='/home'>Giles Bonner</Link></Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to='/portfolio' className='navItem'>Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link to='/resume' className='navItem'>Resume</Link>
            </NavItem>
            <NavItem>
              <Link to='/contact' className='navItem'>Contact</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
