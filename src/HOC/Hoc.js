import React, { useState } from 'react';

function Hoc(Originalcomponent) {
    function NewComponent(props) {

        const [counter, setcounter] = useState(0);
        function onclickCounter() {
            setcounter(counter + 1);
        }

        return <Originalcomponent onclicounter={() => onclickCounter()} counter={counter} {...props}></Originalcomponent>
    }
    return NewComponent
}

export default Hoc