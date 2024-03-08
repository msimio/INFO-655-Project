import { useState, useEffect } from 'react';
import './App.css';
import ResultBar from './ResultBar';
import OutputDisplay from './OutputDisplay';
import BMRDisplay from './BMRDisplay';
import SleepDisplay from './SleepDisplay';
import WeightDisplay from './WeightDisplay';
import HeightDisplay from './HeightDisplay';
import GainWeight from './GainWeight';
import LoseWeight from './LoseWeight';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmr, setBmr] = useState(0);
  const [units, setUnits] = useState('US');
  const [gender, setGender] = useState('Male');
  const [activity, setActivity] = useState(1);
  const [sleephrs, setSleephrs] = useState(1);
  const [sleepscore, setSleepscore] = useState('Good');

  const weightAsNumber = Number(weight);
  const heightAsNumber = Number(height);

  // Conversion functions
const convertHeight = (value, toMetric) => {
  return toMetric ? Math.round(value / 2.54) : Math.round(value * 2.54);
};

const convertWeight = (value, toMetric) => {
  return toMetric ? Math.round(value * 2.205) : Math.round(value / 2.205);
};

const handleUnitChange = () => {
  // Convert height and weight when switching units
  setHeight(convertHeight(heightAsNumber, units === 'US'));
  setWeight(convertWeight(weightAsNumber, units === 'US'));
};

useEffect(() => {
  handleUnitChange(); // Convert on initial render
}, [units]);

const calculateBMI = () => {
  const heightInMeters = units === 'US' ? convertHeight(heightAsNumber, false) / 100 : heightAsNumber / 100;
  const weightInKg = units === 'US' ? convertWeight(weightAsNumber, false) : weightAsNumber;
  return (weightInKg / (heightInMeters ** 2)).toFixed(2);
};

const calculateBMR = () => {
  const weightInKg = units === 'US' ? convertWeight(weightAsNumber, false) : weightAsNumber;
  const heightInCm = units === 'US' ? convertHeight(heightAsNumber, false) : heightAsNumber;
  const genderFactor = gender === 'Female' ? -161 : 5;
  const bmrBase = weightInKg * 10 + heightInCm * 6.25 - age * 5 + genderFactor;
  return (bmrBase * activity).toFixed(2);
};

const handleClick = () => {
  setBmi(calculateBMI());
  setBmr(calculateBMR());

  //CDC Sleep Guidelines---more logic can be added

  if(age<13&&sleephrs>=9)
  {setSleepscore('Good')}
  else
  {setSleepscore('Bad')}
  if(age>13&&age<18&&sleephrs>=8)
  {setSleepscore('Good')}
  else
  {setSleepscore('Bad')}
  if(age>18&&sleephrs>=7)
  {setSleepscore('Good')}
  else
  {setSleepscore('Bad')}

};
  const handleClick2 = () => {
    setWeight(weightAsNumber + 10);
  };

  const handleClick3 = () => {
    setWeight(weightAsNumber - 10);
  };

  return (
    <div>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>BMI & BMR Calculator</h1>
      <div className="segment">
        <h2>Basic Info</h2>
        <hr className="divider" />


        {/* Container for Boxes */}
        <div className="container">

          {/* Box for Height */}
          <div className="box">

            <label>
              <input type="radio" name="Male" value="Male" defaultChecked={true} onChange={(e) => setGender(e.target.value)} checked={gender === 'Male'} />
              Male
            </label>
            <label>
              <input type="radio" name="Female" value="Female" onChange={(e) => setGender(e.target.value)} checked={gender === 'Female'} />
              Female
            </label>
          </div>

          <div className="box">
            <label>
              Age <input value={age} onChange={(e) => setAge(e.target.value)} type="number" />
              <p>Years</p>
            </label>
          </div>

        
          <div className="box">
            <label>
              Height <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" />
            </label>
            <HeightDisplay unitvalue={units}></HeightDisplay>
          </div>

          {/* Box for Weight */}
          <div className="box">
            <label>
              Weight <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" />
            </label>
            <WeightDisplay unitvalue={units}></WeightDisplay>
          </div>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Units:
          <label>
            <input type="radio" name="US" value="US" defaultChecked={true} onChange={(e) => setUnits(e.target.value)} checked={units === 'US'} />
            US
          </label>
          <label>
            <input type="radio" name="Metric" value="Metric" onChange={(e) => setUnits(e.target.value)} checked={units === 'Metric'} />
            Metric
          </label>
        </p>
    </div>
    
    </div>

      {/* Detailed Info Segment */}
      <div className="segment">
      <h2>Detailed Info</h2>
      <hr className="divider" />


        <div className="Dbox">
          <label htmlFor="exerciseDays">How many days do you workout in a week?</label>
          <select id="exerciseDays" onChange={(e) => setActivity(e.target.value)} value={activity}>
            <option value={1}>Select Exercise Level</option>
            <option value={1.2}>No Exercise</option>
            <option value={1.375}>1-2 Times/Week</option>
            <option value={1.55}>3-5 Times/Week</option>
            <option value={1.725}>6-7 Times/Week</option>
            <option value={1.9}>2 Times/Day</option>
          </select>
        </div>

          <div className="Dbox">
            <label htmlFor="sleepHours">How many hours do you sleep at night?</label>
            <select id="sleepHours" onChange={(e) => setSleephrs(e.target.value)} value={sleephrs}>
              <option value={1}>Select Sleep Level</option>
              <option value={5}>Less than 6 hours</option>
              <option value={6}>6 Hours</option>
              <option value={7}>7 Hours</option>
              <option value={8}>8 Hours</option>
              <option value={9}>9 Hours</option>
              <option value={10}>10 Hours</option>
              <option value={11}>11 Hours</option>
              <option value={12}>12 Hours</option>
            </select>
             </div>
            
          </div>
 


      <div className="segment">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <GainWeight unitvalue={units} onClick={handleClick2}></GainWeight>
          <LoseWeight unitvalue={units} onClick={handleClick3}></LoseWeight>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={handleClick}>Get Fitness Scores</button>
        </div>

        <ResultBar bmiResult={bmi} />
        <SleepDisplay sleepvalue={sleepscore}></SleepDisplay>
        <BMRDisplay bmrvalue={bmr}></BMRDisplay>
        <OutputDisplay bmivalue={bmi}></OutputDisplay>
        
      </div>
    </div>
  );

  //My change
}

export default App;

