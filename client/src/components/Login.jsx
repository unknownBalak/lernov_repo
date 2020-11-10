import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap'
import './css/Login.css';
import { Button } from '@material-ui/core';
class Login extends Component {
               constructor(props) {
                 super(props)
               
                 this.state = {
                    email:'',
                    password:'',
                 }
                 this.nameChange=this.nameChange.bind(this);
                 this.formSubmit=this.formSubmit.bind(this);
                 this.handlePassword=this.handlePassword.bind(this);
               }
          nameChange(event){
             console.log(event);
               this.setState({

                    email: event.target.value,
               },() => console.log('You can acees' + this.state.email) )
          event.preventDefault();
              }     
              handlePassword(event){
                this.setState({
                  password:event.target.value,
                })
                
              }

              formSubmit(event){
                alert(`your email is ${this.state.email} and password is ${this.state.password}`);
                event.preventDefault();
              } 

    render() {
      return (
         <Container className='login'>
           <Form onSubmit={this.formSubmit}>
               <Form.Group   controlId='email'>
                 <Form.Label>Email</Form.Label>
                 <Form.Control type='email' value={this.state.email} onChange={this.nameChange} placeholder='Enter email'></Form.Control>
               </Form.Group>
               <Form.Group  controlId='password'>
                 <Form.Label>Password</Form.Label>
                 <Form.Control type='password' placeholder='Enter Password' value={this.state.password} onChange={this.handlePassword} ></Form.Control>
                </Form.Group>
             <Button type='submit' className='bg__button'>Submit </Button>
           </Form>
          
                  </Container> 

        )
    }
}

export default Login
