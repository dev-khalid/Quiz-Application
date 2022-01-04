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
            {/* I will hardcode the condition in each and every page for login and signup redirect .  */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
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
 */
