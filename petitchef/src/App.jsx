import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import './components/Main.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
