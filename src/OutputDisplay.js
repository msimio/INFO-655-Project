export default function OutputDisplay({ bmivalue }) 
{

    if(bmivalue<30&&bmivalue>18.5)
    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center',color:'green'}}>Your BMI {bmivalue}</p>
        </div>
    )
    }
    if(bmivalue==="")
    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center',color:'black'}}>Your BMI {bmivalue}</p>
        </div>
    )
    }
    else

    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center',color:'red'}}>Your BMI {bmivalue}</p>
        </div>
    )
    }
}