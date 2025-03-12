import React, { useEffect } from 'react';

const Childpage=()=>
{
    useEffect(()=> {
        console.log('Useeffect starts here');
       const timervalue = setInterval(()=>
        {
            console.log('Api call');
        },2000);

        return ()=>
        {
            console.log('clean up executed');
            clearInterval(timervalue);
        }
    }, []);

    return(
        <div>
    <h3>Component child</h3>
</div>
    )
}


export default Childpage