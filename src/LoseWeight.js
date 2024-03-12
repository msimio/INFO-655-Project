export default function LoseWeight({unitvalue, onClick})
{
    if(unitvalue==="US")
    {
    return (
      <button onClick={onClick}>Lose 10 Lbs</button>
    );
    }
    else
    {
        return (
          <button onClick={onClick}>Lose 10 Kg</button>
        );
        }

    
  }