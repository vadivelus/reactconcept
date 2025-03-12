import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBrands } from './Slices/Brandslice';
const Brandadd=()=>
{
    const mydisaptch = useDispatch();
    const [brands, setbrands] = useState('');

    const addBrands=()=>
    {
        mydisaptch(setBrands(brands));
        setbrands('');
    }
return(<div>
    <h3>Add brand in redux</h3>
    <input value={brands}  onChange={(e)=>setbrands(e.target.value)}></input>
    <button onClick={()=>addBrands()}>Add brands</button>
</div>)
}

export default Brandadd