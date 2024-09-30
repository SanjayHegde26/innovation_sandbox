import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './FarmSimulator.css';

function FarmSimulator() {
  const [selectedCrop, setSelectedCrop] = useState('wheat'); // Default selection
  const [soilMoisture, setSoilMoisture] = useState(50); // Default value
  const [soilNPK, setSoilNPK] = useState(30); // Default value
  const [soilPh, setSoilPh] = useState(7); // Default value
  const [landSize, setLandSize] = useState(75); // Default value for land size in acres
  const [loading, setLoading] = useState(false); // Loading state
  const [progress, setProgress] = useState(0); // Progress state for loading bar
  const [weather, setweather] = useState(36);
  const navigate = useNavigate();

  const crops = {
  wheat: `${process.env.PUBLIC_URL}/images/wheat.jpg`,
  corn: `${process.env.PUBLIC_URL}/images/corn.jpg`,
  rice: `${process.env.PUBLIC_URL}/images/rice.jpg`,
  soybeans: `${process.env.PUBLIC_URL}/images/soybeans.jpg`,
};

  // Function to handle the Simulate button click
  const handleSimulate = () => {
    setLoading(true); // Start loading
    setProgress(0); // Reset progress

    // Simulate loading progress
    let progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          navigate('/results', {
            state: {
              crop: selectedCrop,
              soilMoisture,
              soilNPK,
              soilPh,
              landSize,
            },
          });
          return 100;
        }
        return prev + 10; // Increment progress
      });
    }, 200); // Adjust time interval as needed
  };

  return (
    <div className="farm-simulator-container">
      {loading ? (
        // Loading screen
        <div className="loading-screen">
          <p>Working magic...</p>
          <div className="loading-bar">
            <div className="loading-progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{progress}%</p>
        </div>
      ) : (
        // Main content when not loading
        <>
          <div className="main-content">
            <div className="crop-selector">
              <h2>Select your current crop</h2>
              <label htmlFor="crops">Select Crop:</label>
              <select id="crops" value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)}>
                {Object.keys(crops).map((crop) => (
                  <option key={crop} value={crop}>
                    {crop.charAt(0).toUpperCase() + crop.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="crop-image">
              <img src={`/images/${selectedCrop}.jpg`} alt={selectedCrop} className="selected-crop-image" />
            </div>
          </div>

          <div className="soil-parameters">
            <h3>Input Soil Parameters</h3>

            <div className="parameter">
              <label htmlFor="soilMoisture">Soil Moisture (%):</label>
              <input
                type="number"
                id="soilMoisture"
                value={soilMoisture}
                onChange={(e) => setSoilMoisture(e.target.value)}
                min="0"
                max="100"
                step="1"
              />
            </div>

            <div className="parameter">
              <label htmlFor="soilNPK">Soil NPK (kg/ha):</label>
              <input
                type="number"
                id="soilNPK"
                value={soilNPK}
                onChange={(e) => setSoilNPK(e.target.value)}
                min="0"
                max="100"
                step="1"
              />
            </div>

            <div className="parameter">
              <label htmlFor="soilPh">Soil pH:</label>
              <input
                type="number"
                id="soilPh"
                value={soilPh}
                onChange={(e) => setSoilPh(e.target.value)}
                min="0"
                max="14"
                step="0.1"
              />
            </div>

            <div className="parameter">
              <label htmlFor="landSize">Land Size (acres):</label>
              <input
                type="range"
                id="landSize"
                min="0"
                max="100"
                step="1"
                value={landSize}
                onChange={(e) => setLandSize(e.target.value)}
              />
              <p>{landSize} acres</p>
            </div>

            <div className="parameter">
          <label htmlFor="weather">Weather (celsius):</label>
          <input 
            type="number" 
            id="weather" 
            value={weather} 
            onChange={(e) => setweather(e.target.value)}
            min="0" 
            max="60" 
            step="1"
          />
        </div>

          </div>

          <button className="simulate-button" onClick={handleSimulate}>
            Simulate
          </button>
        </>
      )}
    </div>
  );
}

export default FarmSimulator;
