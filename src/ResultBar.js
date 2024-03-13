
import React, { useEffect, useState } from 'react';
import './App.css';

const ResultBar = ({ bmiResult }) => {
  const [conePosition, setConePosition] = useState(0);

  useEffect(() => {
    // Calculate the position of the cone based on the BMI result
    const newPosition = calculateConePosition(bmiResult);
    setConePosition(newPosition);
  }, [bmiResult]);

  const calculateConePosition = (result) => {
    const numericResult = Number(result);

    if (isNaN(numericResult)) {
      return 0;
    }

    if (numericResult < 18.5) {
      return (numericResult / 18.5) * 18.5; // Linear mapping for 'underweight' (red)
    } else if (numericResult >= 18.5 && numericResult <= 25) {
      return ((numericResult - 18.5) / 6.5) * 50; // Linear mapping for 'healthy' (green)
    } else if (numericResult > 25 && numericResult <= 40) {
      return 50 + ((numericResult - 25) / 15) * 50; // Linear mapping for 'overweight' (red)
    } else {
      return 100; // Cap at 100
    }
  };

  return (
    <div className="result-bar-container">
      <div className="result-bar">
        <div className="cone" style={{ left: `${conePosition}%` }}>
          <span>{isNaN(Number(bmiResult)) ? 'N/A' : Number(bmiResult).toFixed(2)}</span>
        </div>
      </div>
      <div className="legend">
        <div className="legend-item" style={{ backgroundColor: 'red' }}></div>
        <div className="legend-item" style={{ backgroundColor: 'green' }}></div>
        <div className="legend-item" style={{ backgroundColor: 'red' }}></div>
      </div>
    </div>
  );
};

export default ResultBar;
