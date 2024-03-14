import React from 'react';

function WeightDisplay ({ unitvalue }) 
{
  return (
    <div>
      {unitvalue === 'US' ? (
        <p> Pounds</p>
      ) : (
        <p> Kilograms</p>
      )}
    </div>
  );
};

export default WeightDisplay;