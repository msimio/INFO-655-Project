import React from 'react';

const HeightDisplay = ({ unitvalue }) => {
  return (
    <div>
      {unitvalue === 'US' ? (
        <p>Inches</p>
      ) : (
        <p>Centimeters</p>
      )}
    </div>
  );
};

export default HeightDisplay;