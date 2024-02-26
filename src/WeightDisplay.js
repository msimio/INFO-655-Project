export default function WeightDisplay({ unitvalue }) 
{

    if(unitvalue==="US")
    {return (
    
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <p> Pounds</p>
        
        </div>
    )
    }
    else

    {return (
    
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <p> Kilograms</p>
        </div>
    )
    }
}