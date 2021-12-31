import React from 'react';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput'; 
import classes from '../../styles/Signup.module.css';
import Checkbox from '../Checkbox'; 
import Button from '../Button'; 

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className='column'>
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox text=" I agree to the Terms &amp; Conditions" />
          <Button>Submit Now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
