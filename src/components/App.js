import React from 'react';
import '../styles/App.css';
import Layout from './Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result'; 
const App = () => {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Quiz /> */}
      <Result />
    </Layout>
  );
};

export default App;
