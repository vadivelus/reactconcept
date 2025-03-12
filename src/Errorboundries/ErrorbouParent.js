import React from 'react';
import ErrChild1 from './ErrChild1';
import ErrChild2 from './ErrChild2';
import { ErrorBoundary } from 'react-error-boundary';
import Errorfallback from './Errorfallback';
function ErrorbouParent()
{
    return(
        <div>
            <p>
                This is parent component.
            </p>
            <hr></hr>
            <ErrorBoundary FallbackComponent={Errorfallback} onReset={()=>{
console.log('Redirect to previous component.')
            }} >
            <ErrChild1 id={"gfdfgd"}></ErrChild1>
            <hr></hr>
            <ErrChild2 field={'JAY'}></ErrChild2>
            </ErrorBoundary>
        </div>
    )
}

function Redirecterrocomponet()
{
    return(<div>
        <h2>This is redirect compoenent page.</h2>
    </div>)
}

export default ErrorbouParent