import React, { useState } from 'react';
import Childpage from './Childpage';

const Masterpage=()=>
{
const [redirect, setredirect]= useState(true);

return(
    <div>
        <h1>Use effect clean</h1>
        <button onClick={()=> setredirect(!redirect)}>Render component</button>
        {redirect ? <Childpage></Childpage> : null }
    </div>
)

}

export default Masterpage