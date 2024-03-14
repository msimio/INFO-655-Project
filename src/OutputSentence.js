import React from 'react';
export default function OutputSentence({ bmi,sleepscore,bmr }) 
{
    let firstSentence = "Let’s take a look at your health metrics.";
    let secondSentence = `A BMI score of ${bmi} and a sleep score that’s ${sleepscore}. `;
    if (bmi >= 18.5 && bmi <= 24.9) {
      secondSentence += `🎉 `;
    }
    if (bmr) {
      secondSentence += `To maintain your weight, you would need about ${bmr} calories each day.`;
    }
    if(bmi==='')
    {
        return (<p></p>);

    }
    else{
    return (
    <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>{firstSentence}</p>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>{secondSentence}</p>
    </div>
    );
    }
}