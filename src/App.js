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
  const [bmi, setBmi] = useState(0);
  const [units, setUnits] = useState('');
  const weightAsNumber = Number(weight);
  const heightAsNumber = Number(height);

  //Implement in component
  const handleClick = () => {
    if(units==="Metric")
    {
    setBmi((weightAsNumber/((heightAsNumber/100)**2)).toFixed(2))
    }
    else
    {
      setBmi((weightAsNumber/((heightAsNumber)**2)*703).toFixed(2))
    }
  
  
  
  };

  const handleClick2 = () => {setWeight(weightAsNumber + 10)};

  const handleClick3 = () => {setWeight(weightAsNumber - 10)};

  //Organize inline+components

  return (
    <div>
      <h1 style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>BMI Calculator</h1>
      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <label>Height: <input value={height} onChange={e => setHeight(e.target.value)} type="number"/></label>
      
      <label>Weight: <input value={weight} onChange={e => setWeight(e.target.value)} type="number"/></label>
      
      
      </div>
      <div class="underneath">
        <HeightDisplay unitvalue={units}></HeightDisplay>
        <WeightDisplay unitvalue={units}></WeightDisplay>
      </div>

      <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        Units:
        <label>
          <input type="radio" name="Metric" value="Metric" defaultChecked={true} onChange={e => setUnits(e.target.value)} checked={units === 'Metric'} />
          Metric
        </label>
        <label>
          <input
            type="radio"
            name="US"
            value="US"
            onChange={e => setUnits(e.target.value)}
            checked={units === 'US'}
            
          />
          US
        </label>
      </p>


      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <GainWeight unitvalue={units} onClick={handleClick2}></GainWeight>
      <LoseWeight unitvalue={units} onClick={handleClick3}></LoseWeight>
      </div>
       
      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <button onClick={handleClick}>Calculate BMI</button>
      </div>
      <OutputDisplay bmivalue={bmi}></OutputDisplay>
      <ResultBar bmiResult={bmi} />
      </div>
  );
}

export default App;
