import React, {memo} from 'react';

const CallbackChild=({value, addtoCart})=>
{

    console.log('Product rendered.')
return(
    <div style={{border:'solid 0.5px', width:'50%'}}>
        <p>{value}</p>
        <button onClick={addtoCart}>Add to cart</button>
        <hr></hr>
    </div>
)
}

export default memo(CallbackChild)