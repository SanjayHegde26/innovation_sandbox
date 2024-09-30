import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultsPage.css';

function ResultsPage() {
  const { state } = useLocation();
  const { crop, soilMoisture, soilNPK, soilPh, landSize } = state || {};

  // Mock yield, profit, and detailed recommendations for each crop
  const recommendations = {
    wheat: { 
      yield: 85, 
      profit: 60, 
      details: 'Wheat is a high-yield crop with moderate profit margins. Optimal soil moisture should be around 60-70%, and pH levels should be between 6.0 and 7.0 for the best growth. Ensure regular irrigation and proper fertilization for maximum yield.' 
    },
    corn: { 
      yield: 78, 
      profit: 55, 
      details: 'Corn thrives in well-drained soils with high organic matter. Maintain soil moisture at 50-60%, and pH levels between 5.8 and 7.0. Corn requires adequate nitrogen, so apply balanced NPK fertilizers for the best results.' 
    },
    rice: { 
      yield: 92, 
      profit: 65, 
      details: 'Rice cultivation is highly profitable in areas with high soil moisture. Maintain pH levels between 5.0 and 6.5, and use nitrogen-rich fertilizers to boost growth. Proper water management is crucial for rice crops.' 
    },
    soybeans: { 
      yield: 80, 
      profit: 70, 
      details: 'Soybeans are a versatile crop with good profit potential. They grow best in soil with pH levels between 6.0 and 6.8. Proper weed control and moderate soil moisture levels are key to maximizing soybean yield.' 
    },
  };

  // Image paths for the crops
  const cropImages = {
    wheat: `${process.env.PUBLIC_URL}/images/wheat.jpg`,
    corn: `${process.env.PUBLIC_URL}/images/corn.jpg`,
    rice: `${process.env.PUBLIC_URL}/images/rice.jpg`,
    soybeans: `${process.env.PUBLIC_URL}/images/soybeans.jpg`,
  };

  // Get the recommendation for the selected crop
  const { yield: cropYield, profit: cropProfit, details } = recommendations[crop] || {};

  return (
    <div className="results-container">
      <h2>Recommendations</h2>

      <div className="results-content">
        <div className="crop-name">
          <h3>{crop.charAt(0).toUpperCase() + crop.slice(1)}</h3>
          {/* Display crop image */}
          <img src={cropImages[crop]} alt={crop} className="crop-image-small" />
        </div>

        <div className="yield-profit">
          <p><strong>Yield:</strong> {cropYield}%</p>
          <p><strong>Profit:</strong> {cropProfit}%</p>
        </div>
      </div>

      <div className="detailed-recommendation">
        <p>{details}</p>
      </div>

      {/* Table for other crop suggestions */}
      <div className="other-crops-table">
        <h3>Other Crop Suggestions</h3>
        <table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Yield (%)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Barley', yield: 75 },
              { name: 'Oats', yield: 70 },
              { name: 'Sunflower', yield: 80 },
              { name: 'Sorghum', yield: 65 },
            ].map((crop, index) => (
              <tr key={index}>
                <td>{crop.name}</td>
                <td>{crop.yield}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultsPage;
