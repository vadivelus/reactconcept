import React, { useState } from 'react';

function Prevstate()
{
    const [counted, setcounted]= useState(0);
    const [name, setname] = useState('parthiban');

const addplusfive=()=>
{
    
    for(let i=0; i<5; i++)
    {
    setcounted(prevState=> prevState +1);
    }
}

    return(
        <div>
            <p>
                <label>Counted {counted}</label>
            </p>
            <button onClick={addplusfive}>Click me to add5</button>
        </div>
    )
}

export default Prevstate