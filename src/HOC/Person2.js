import React,{useState} from 'react';
import Hoc from './Hoc';

function Person2({onclicounter, counter})
{
    return(
        <div>
            <p style={{textAlign:'center', border:'solid 0.5px', width:'100%'}} onMouseOver={onclicounter}><h2>  Hovered {counter} Times</h2> </p>
        </div>
    )
}

export default Hoc(Person2)