import React, { Component } from 'react'
import Header from '../components/navbar'
import Footer from '../components/footer'
import '../css/home.css'
import '../css/contact.css'
import axios from 'axios'
import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'
class ContactContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }


  handleChange = (e) => {
    let name =  e.target.name
    let value =  e.target.value
    this.setState(prevState => ({
      [name]: value
    }))
  }

  handleClick = (e) => {
    e.preventDefault()
    const {name, email, message} = this.state
    console.log(this.state)
  }

  render(){
    return(
    <div>
      <Header />
        <div className='wrapper'>
        <div>
          <h1>Want to work together?<br/>Lets get in touch.</h1>
          <Form>
            <FormGroup id='name'>
              <ControlLabel>Enter Name</ControlLabel>
              <FormControl
              type='text'
              name='name'
              onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup id='email'>
              <ControlLabel>Enter Email</ControlLabel>
              <FormControl
              type='email'
              name='email'
              onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup id='msg'>
              <ControlLabel>Enter Message</ControlLabel>
              <FormControl
              id='msgInput'
              name='message'
              componentClass='textarea'
              onChange={this.handleChange}
              />
            </FormGroup>
            <p id='btn'><Button id='submit' onClick={this.handleClick} type='submit'>Submit</Button></p>
          </Form>
        </div>
        </div>
      <Footer />
    </div>
    )
  }
}

export default ContactContainer
