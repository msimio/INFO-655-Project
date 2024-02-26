export default function GainWeight({unitvalue, onClick})
{
    if(unitvalue==="US")
    {
    return (
      <button onClick={onClick}>Gain 10 Lbs</button>
    );
    }
    else
    {
        return (
          <button onClick={onClick}>Gain 10 Kg</button>
        );
        }

    
  }