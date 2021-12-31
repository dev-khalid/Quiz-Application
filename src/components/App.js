import React from 'react';
import '../styles/App.css';
import Layout from './Layout'; 
import Signup from './pages/Signup'; 
import Home from './pages/Home'; 
import Login from './pages/Login'
const App = () => {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      <Login />
    </Layout>
  );
};

export default App;
