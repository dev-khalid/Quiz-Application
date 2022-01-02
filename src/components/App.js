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
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz/:id?" element={<Quiz />} />
            <Route path="/result/:id?" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
