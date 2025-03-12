import React, { useState, useMemo, useCallback } from 'react';


function Usememo()
{
    const [counter, setCounter] = useState(0);
    const [arr, setarr] = useState([2,1,5]);
    const [executedcount, setexecutedcount] = useState([]);

    const getmaxofarray =()=>
    {
        console.log('memo function executed...');
        let my = "memo function executed...";
        setexecutedcount([...executedcount, my]);
        return (Math.max(...arr));
    }
    const memofunction = useMemo(()=> getmaxofarray(),[arr]);

    const changemyarray =() =>{
        let rnum = Math.floor(Math.random() * 10);
        let changedarary = [...arr, rnum];
        setarr(changedarary);
        console.log(arr);
    }
    return (
        <div>
            <h3>|||| Sample useMemo ||||</h3>
            <p>
              Counter: {counter}
            </p>
            <button onClick={()=>setCounter(counter + 1)}>Add counter</button>
            <br></br>
            <p>
                Array: {JSON.stringify(arr)}
            </p>
            <button onClick={()=> changemyarray()}>Increase array</button>
            <p>Mamximum of array : {memofunction}</p>
<hr></hr>
            <p>
              {executedcount.map((item,i)=>
            {
             return( <p>  {i + '. ' + item}</p>)
            })}
            </p>

            
        </div>
    )
}

export default Usememo