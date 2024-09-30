import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FarmSimulator from './FarmSimulator';
import ResultsPage from './ResultsPage'; // Import the new ResultsPage
import './index.css';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

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
