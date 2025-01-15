import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Login from './components/Login'; // Import your Login component

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Define the route for the main page */}
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
