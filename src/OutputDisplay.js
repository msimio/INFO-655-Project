import React from 'react';

const OutputDisplay = ({ bmivalue }) => {
  const getOutputSentence = (bmi) => {
    let sentence = 'Your BMI is ';

    if (bmi < 18.5) {
      sentence += 'underweight.';
    } else if (bmi >= 18.5 && bmi < 25) {
      sentence += 'normal.';
    } else if (bmi >= 25 && bmi < 30) {
      sentence += 'overweight.';
    } else {
      sentence += 'obese.';
    }

    return sentence;
  };

  return <p>{getOutputSentence(bmivalue)}</p>;
};

export default OutputDisplay;