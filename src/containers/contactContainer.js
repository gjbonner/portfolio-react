import React, { Component } from 'react'
import Header from '../components/navbar'
import Footer from '../components/footer'
import '../css/home.css'
import '../css/contact.css'
import * as emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, Button, ControlLabel, Modal } from 'react-bootstrap'
class ContactContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      fireError: false,
      emailSent: false
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
    if(this.state.name === '' || this.state.email === '' || this.state.message === '' || this.state.email.includes('@') === false){
      this.setState({fireError: true})
    } else {
      let template_params = {
        "reply_to": `${this.state.email}`,
        "from_name": `${this.state.name}`,
        "to_name": `Giles`,
        "message_html": `${this.state.message}`
      }
      const service_id = 'gmail'
      const userID = 'user_xgDxlg4jdLHC8rRo6ZGaF'
      const template_id = 'template_ZwW9Fl5K'

      emailjs.send(service_id, template_id, template_params, userID)
      .then(r => {
        console.log('sent', r.text);
      }).then(this.setState({emailSent: true}))
    }
  }

  closeModal = () => {
    this.setState({
      fireError: false,
      emailSent: false
    })
  }

  render(){
    return(
    <div>
      <Header />
        <div className='contactWrapper'>
        <img className='contactImg' src='https://res.cloudinary.com/dtdt6vcwa/image/upload/v1547674140/hackathon.png' />
        <div>
          <h1>I'm always looking for fun projects to be a part of!<br/> Want to work together?<br/>Lets get in touch.</h1>
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

          {this.state.fireError ?
            <div className='static-modal'>
              <Modal.Dialog>
                <Modal.Header><Modal.Title>Oops!</Modal.Title></Modal.Header>
                <Modal.Body>Please make sure you fill in all fields and that your email is valid...</Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closeModal}>Ok</Button>
                </Modal.Footer>
              </Modal.Dialog>

            </div>

            : ''}
            {this.state.emailSent ?
              <div className='static-modal'>
                <Modal.Dialog>
                  <Modal.Header><Modal.Title>Email Sent!</Modal.Title></Modal.Header>
                  <Modal.Body>I will be sure to reply as soon as I can!</Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.closeModal}>Ok</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            : ''}
        </div>
      </div>
      <Footer/>
    </div>
    )
  }
}

export default ContactContainer
