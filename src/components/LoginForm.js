import React from 'react'
import Form from './Form'
import Button from './Button'
import TextInput from './TextInput'

const LoginForm = () => {
  return (
    <Form style={{ height: '330px' }}>
      <TextInput type="text" placeholder="Enter Email" icon="alternate_email" />
      <TextInput type="password" placeholder="Enter Password" icon="lock" />
      <Button>Submit Now</Button>
      <div class="info">
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </Form>
  );
}

export default LoginForm
