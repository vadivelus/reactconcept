import React, { useState } from 'react';
import Counter from './counter';

function Demo()
{
const [counter, setcounter] = useState(0);
const [msg, setmsg] = useState('');

 return(
    <div>
        <Counter count={counter}></Counter>
        {/* <p>
            <label>
                Counter : {counter}
            </label>
        </p> */}
        <button onClick={()=>setcounter(counter +1)}>counter</button>

       <p>
        <input type='text' onChange={(e)=> setmsg(e.target.value)}></input>
        </p>
    </div>
 )   
}

export default Demo