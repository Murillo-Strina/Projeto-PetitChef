import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';
import { UserProvider } from './contexts/UserContext'; 
import { ThemeProvider } from './contexts/ThemeContext';
import './components/Main/Main.jsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}


export default App;
