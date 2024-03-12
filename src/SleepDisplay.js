export default function SleepDisplay({ sleepvalue }) 
{

    if(sleepvalue==="Good")
    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center',color:'green'}}>Your Sleep Score {sleepvalue}</p>
        </div>
    )
    }
    if(sleepvalue==="")
    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center',color:'black'}}>Your Sleep Score {sleepvalue}</p>
        </div>
    )
    }
    else

    return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center',color:'red'}}>Your Sleep Score {sleepvalue}</p>
        </div>
    )
    
}