import React from "react";
import { useForm } from "react-hook-form";
import axios from './axios'
import { Button, Container, Form } from "react-bootstrap";
import './css/SignUp.css';

function SignUp() {

  const { register, handleSubmit,setValue,errors } = useForm();

  const onSubmit = async (data) => {
   
    await axios.post("/messages", {
      name: data.name,
      email:data.email,
      phonenumber: data.mobileno,
      profession:data.profession,     
    });
    // const stringify_data = JSON.stringify(data);
    alert("You submitted data successfully! ", JSON.stringify(data));
setValue('name','')
setValue('email','')
setValue('mobileno','')
setValue('profession','')
};

    return (
      <Container className='signup'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" name="name" ref={register({required: true}) } />
          {errors.name && <span> name length should more than 3 letter</span>}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' name="email" ref={register({required: true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
          {errors.email && <span> Email is required</span>}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control type="tel" name="mobileno" ref={register({required: true,minLength:10, maxLength:10})} />
          {errors.mobileno && <span>10 digit Mobile number is required</span>}
        </Form.Group>
       <Form.Group>
       <Form.Label>Profession: </Form.Label>
        <select name='profession' ref={register({required: true})} >
          <option value=''>..........</option>
          <option value='student'>Student</option>
          <option value='employee'>Employee</option>
        </select>
        </Form.Group>
        <Button  primary type="submit" >Submit </Button>
      </Form>

      </Container>
    );
  }

export default SignUp;
