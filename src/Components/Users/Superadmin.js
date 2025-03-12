import React from 'react';
import { useParams } from 'react-router-dom';
export default function Superadmin()
{
    let myparam = useParams();
    let paranamefromroutes = myparam.userid;
        return(<div>
        <h3>This is superadmin page</h3>
        <p>User details about {paranamefromroutes}</p>
    </div>)
}