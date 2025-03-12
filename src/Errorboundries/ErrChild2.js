import React from 'react';

function ErrChild2({field})
{
    return(<div>
        <p>This is Child2</p>
        <p>{field.toLowerCase()}</p>
    </div>)
}

export default ErrChild2