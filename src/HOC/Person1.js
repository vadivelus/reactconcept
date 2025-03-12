import React,{useState} from 'react';
import Hoc from './Hoc';

function Person1({onclicounter, counter, name})
{
    return(
        <div>
            <p>Name: {name}</p>
             <p style={{textAlign:'center'}}> <button onClick={onclicounter}> Clicked {counter} Times </button></p>
        </div>
    )
}

export default Hoc(Person1)