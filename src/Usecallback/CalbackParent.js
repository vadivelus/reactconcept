import React, { useCallback, useState } from 'react';
import Product from './CallbackChild';

function CallbackParent()
{
const [prod, setprod]=useState(['Prod1', 'Prod2']);
const [counter, setcounter] =useState(0);
const [cart, setcart] = useState(0);

const addtoCart =useCallback(()=>
{
setcart(cart + 1);
},[cart]);
 
    return(
        <div style={{border:'solid 0.5px', width:'50%', borderColor:'green'}}>
<p style={{textAlign:'center'}}>Parent</p>
            <p>
                Counter : {counter}
            </p>
            <p>---------------------------------------------------------------------------------------------------</p>
            <p>Cart : {cart}</p>
            <p>
                <button onClick={()=>setcounter(counter + 1)}>Add counter</button>
            </p>
            <p style={{textAlign:'center'}}>Child</p>
            {prod.map((item, i)=>
            {
            return <Product value={item} key={i} addtoCart ={addtoCart}/>;
            
            }
        )}
        </div>
    )

}

export default CallbackParent