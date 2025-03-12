import React,{createContext, useCallback, useState} from 'react';
import Checkout from './Checkout';

export const mycontext = createContext();
function Loginmaster()
{
    const [usertype, setusertype]=useState('Guest');
    const [parentvalue, setparentvalue] = useState('');
const changeUsertype =useCallback(()=>
{
    setusertype(usertype === 'Guest' ? 'Admin' : 'Guest');
    
},[usertype]);
console.log('Parent')
    return(<div>
        
        <mycontext.Provider value={{usertype,changeUsertype}} >
            <Checkout/>
        </mycontext.Provider>
    </div>)
}

export default Loginmaster
