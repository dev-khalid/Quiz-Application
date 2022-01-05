import React from 'react';
import '../styles/App.css';
import Layout from './Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes> 
            {/* Need to make the route Private As per the following link: https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5 */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/result/:id" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;

/**
 * Project with what i have learned so far .
 * aws - Amplyfy
 * GitHub Actions
 * Jenkins
 * Testing
 * Tailwind
 * GraphQl
 * TypeOrm with MySql.
 * adobe xd
 * photoshop
 * video editing
 * done. Finally I can start applying anywhere .
 *
 *
 * Upgrade myself:
 * Next.js
 * Nest.js
 *
 * 
 */
