import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp'; // ✅ correct

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} />

        {/* Add all routes here */}
        <Routes>
            
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
