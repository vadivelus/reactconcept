import React,{useState} from 'react';
import Usecallback from './../Usecallback/CalbackParent';

const Errorfallback = ({error, resetErrorboundry})=>
{

    const [isredirect, setisredirect] = useState(true);
    const myresetfunction =()=>
    {
        setisredirect(false);
    }
return(
    
   isredirect ? (<div>
        <h2>Something went wrong.</h2>
        <p>{error.message}</p>
        <button onClick={()=>myresetfunction()}>Reset</button>
    </div>) : (<div><Usecallback></Usecallback></div>)
)
}

export default Errorfallback