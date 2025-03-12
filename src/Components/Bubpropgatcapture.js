import React, { useEffect } from 'react';

const Bubprogatcapture= ()=>
{
    const mystle ={
        'margin':'10px',
        'padding':'10px',
        'border':'1px solid red'
    }
    const myspandstyl ={
        'margin':'10px',
        'padding':'16px',
        'border':'1px solid red'
    }
useEffect(()=>{
    const div = document.querySelector('div');
    const form = document.querySelector('form');
    const button = document.querySelector('button');
    const span = document.querySelector('span');

    div.addEventListener('click', function(){
        alert('div');
    })
    form.addEventListener('click', function(){  
        alert('form')
    }, true)   
    span && span.addEventListener('click', function()
    {
        alert('span');
    })
    button && button.addEventListener('click', function()
    {
        alert('button')
    })
},[]);
    return(
        <div >
            <div id='firstdiv' style={mystle}>
                DIV
                <form id='seconddiv' style={mystle}>
                    FORM
                    <span style={myspandstyl}>
                        SPAN
                    <button id='thirddiv' style={mystle}>BUTTON</button>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Bubprogatcapture