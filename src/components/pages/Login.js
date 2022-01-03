import React  from 'react';
import Illustration from '../Illustration';
import LoginForm from '../LoginForm';
import PrivateRoute from './PrivateRoute';
const Login = () => { 
  PrivateRoute(); 
  return (
    <>
      <h1>Login To Your Account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
