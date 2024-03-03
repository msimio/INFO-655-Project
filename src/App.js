// App.js
import { useState } from 'react';
import './App.css';
import ResultBar from './ResultBar';
import OutputDisplay from './OutputDisplay';
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
  const [units, setUnits] = useState('');
  const [gender, setGender] = useState('');
  const [activity, setActivity] = useState('');
  
  const weightAsNumber = Number(weight);
  const heightAsNumber = Number(height);

  const handleClick = () => {
    if (units === 'Metric') {
      setBmi((weightAsNumber / ((heightAsNumber / 100) ** 2)).toFixed(2));
      if(gender=== "Female")
      {setBmr((weightAsNumber*10)+(height*6.25)-(age*5)-161)}
      else
      {setBmr((weightAsNumber*10)+(height*6.25)-(age*5)+5)}
    } else {
      setBmi((weightAsNumber / (heightAsNumber ** 2) * 703).toFixed(2));
      if(gender=== "Female")
      {setBmr((weightAsNumber*4.536)+(height*15.88)-(age*5)+5)}
      else
      {setBmr((weightAsNumber*4.536)+(height*15.88)-(age*5)+5)}
    }
  };

  const handleClick2 = () => {
    setWeight(weightAsNumber + 10);
  };

  const handleClick3 = () => {
    setWeight(weightAsNumber - 10);
  };



  return (
    <div>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>BMI Calculator</h1>
  
      {/* Container for Boxes */}
      <div className="container">
  
        {/* Box for Height */}
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

        <div className="box">
          <label>
            Age <input value={age} onChange={(e) => setAge(e.target.value)} type="number" />
          </label>
          <p>Years</p>
        </div>

        <div className="box">
          
          <label>
            <input type="radio" name="Male" value="Male" defaultChecked={true} onChange={(e) => setGender(e.target.value)} checked={gender === 'Male'} />
            Male
          </label>
          <label>
            <input type="radio" name="Female" value="Female" onChange={(e) => setGender(e.target.value)} checked={gender === 'Female'} />
            Female
          </label>
          <p>Gender</p>
      
        </div>

        

        <div className="box">
        <select onChange={(e) => setActivity(e.target.value)} value={activity}>
          <option value="">Select Exercise Level</option>
          <option value="A">No Exercise</option>
          <option value="B">1-2 Times/Week</option>
          <option value="C">3-5 Times/Week</option>
          <option value="D">6-7 Times/Week</option>
          <option value="E">2 Times/Day</option>
        </select>
        </div>
  
        </div>
  
      <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Units:
        <label>
          <input type="radio" name="Metric" value="Metric" defaultChecked={true} onChange={(e) => setUnits(e.target.value)} checked={units === 'Metric'} />
          Metric
        </label>
        <label>
          <input type="radio" name="US" value="US" onChange={(e) => setUnits(e.target.value)} checked={units === 'US'} />
          US
        </label>
      </p>
  
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <GainWeight unitvalue={units} onClick={handleClick2}></GainWeight>
        <LoseWeight unitvalue={units} onClick={handleClick3}></LoseWeight>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={handleClick}>Calculate BMI</button>
      </div>



      <p>Your Maintenance Calories {bmr}</p>

      <OutputDisplay bmivalue={bmi}></OutputDisplay>
      <ResultBar bmiResult={bmi} />
    </div>
  );
}

//Need to add BMR Output Component
//Need to add logic for exercise level

export default App;
