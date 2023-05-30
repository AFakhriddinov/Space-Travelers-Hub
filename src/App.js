import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
