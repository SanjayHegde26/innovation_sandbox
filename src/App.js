import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FarmSimulator from './FarmSimulator';
import ResultsPage from './ResultsPage'; // Import the new ResultsPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FarmSimulator />} />
        <Route path="/results" element={<ResultsPage />} /> {/* Define the new results page route */}
      </Routes>
    </Router>
  );
}
console.log('App is starting...');
export default App;
