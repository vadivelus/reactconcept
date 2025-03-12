import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFruites } from './Slices/Fruitslice';

const Fruitadd=()=>
{
    const mydispatch = useDispatch();    
    const [myfruit, setmyfruite]= useState('');
    const addfruites =()=>
    {        
        mydispatch(setFruites(myfruit));
        setmyfruite('');
    }
    return(<div>
        <h3>Create fruits in Redux</h3>
        <input value={myfruit} onChange={(e)=>setmyfruite(e.target.value)}></input>
        <button onClick={()=>addfruites()}>Add fruit</button>
    </div>)
}

export default Fruitadd
