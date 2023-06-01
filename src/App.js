import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Missions from './Components/Missions';
import Myprofile from './Components/Myprofile';
import Rockets from './Components/Rockets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
