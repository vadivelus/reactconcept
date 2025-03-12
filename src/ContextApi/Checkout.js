import React, {useContext,memo} from 'react';
import {mycontext} from './Loginmaster'

function Checkout()
{
    console.log('Child');
const getcontext = useContext(mycontext);
    return(<div>
        <p>Checkout {getcontext.usertype} </p>
        <button onClick={getcontext.changeUsertype}>Switch user</button>
    </div>)
}

export default memo(Checkout)