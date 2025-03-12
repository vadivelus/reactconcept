import {React, memo} from 'react';

function Counter(props)
{
    console.log('Counter is re-rendered...');
return(
    <div>
        
                
           
        <p>
<label>
  Counts: {props.count}
</label>
        </p>
    </div>
)
}

export default memo(Counter)
