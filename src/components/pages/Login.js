import React, { useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Illustration from '../Illustration';
import LoginForm from '../LoginForm'; 
const Login = () => {  
  const {currentUser} = useAuth(); 
  const navigate = useNavigate(); 
  useEffect(() => { 
    if(currentUser){ 
      navigate('/'); 
    }
  },[currentUser,navigate])
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
