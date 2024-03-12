import { useState, useEffect } from 'react';
import './App.css';
import ResultBar from './ResultBar';
import OutputDisplay from './OutputDisplay';
import BMRDisplay from './BMRDisplay';
import SleepDisplay from './SleepDisplay';
import WeightDisplay from './WeightDisplay';
import HeightDisplay from './HeightDisplay';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import confetti from "https://esm.run/canvas-confetti@1";


function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [bmi, setBmi] = useState('');
  const [bmr, setBmr] = useState();
  const [units, setUnits] = useState('US');
  const [gender, setGender] = useState('Male');
  const [activity, setActivity] = useState(1);
  const [sleephrs, setSleephrs] = useState(1);
  const [sleepscore, setSleepscore] = useState('');

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
  //Confetti logic - does not automatically update bmi
  if(bmi<30&&bmi>18.5){
  confetti({
    particleCount: 150,
    spread: 60});
  }

  //CDC Loose Sleep Guidelines---more logic can be added

  if(age<13&&sleephrs>=9)
  {setSleepscore('Good')}

  else if(age>13&&age<18&&sleephrs>=8)
  {setSleepscore('Good')}

  else if(age>18&&sleephrs>=7)
  {setSleepscore('Good')}
  else
  {setSleepscore('Bad')}

};
  

  return (
    <div>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Fitness Calculator</h1>
      <div className="segment">
        <h2>Basic Info</h2>
        <hr className="divider" />


        {/* Container for Boxes */}
        <div className="container">


        <div className="switch-container">
          <label htmlFor="genderMale" className="option-label">Male</label>
          <div className="switch">
            <input type="checkbox" id="genderMale" name="gender" onChange={(e) => setGender(e.target.checked ? 'Female' : 'Male')} checked={gender === 'Female'} />
            <label htmlFor="genderMale" className="slider round"></label>
          </div>
          <label htmlFor="genderFemale" className="option-label">Female</label>
        </div>

        <div className="switch-container">
          <label htmlFor="toggleUnits" className="option-label">US</label>
          <div className="switch">
            <input type="checkbox" id="toggleUnits" onChange={() => setUnits(units === 'Metric' ? 'US' : 'Metric')} checked={units === 'Metric'} />
            <label htmlFor="toggleUnits" className="slider round"></label>
          </div>
          <label htmlFor="toggleUnits" className="option-label">Metric</label>
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
            <option value={1.2}>0 Days</option>
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


        <p>Adjust Weight</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <Slider 
              defaultValue={100}
              min={0}
              max={300}
              value={weightAsNumber}
              step={1}
              onChange={(e) => setWeight(e)}
              style={{ width: "50%" }}
            />
           </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={handleClick}>Get Fitness Scores</button>
        </div>

        


        <div className='Outbox' style={{  justifyContent: 'center' }}>
        <SleepDisplay sleepvalue={sleepscore} ></SleepDisplay>
        <BMRDisplay bmrvalue={bmr}></BMRDisplay>
        <OutputDisplay bmivalue={bmi}></OutputDisplay>
        <ResultBar bmiResult={bmi} />

        </div>

        

        
        
      </div>
    </div>
  );

  //My change
}

export default App;