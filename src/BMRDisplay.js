export default function BMRDisplay({ bmrvalue }) 
{

    return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>Your Maintenance Calories {bmrvalue}</p>
        </div>
    )
    
}