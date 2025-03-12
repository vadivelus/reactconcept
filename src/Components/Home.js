import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home()
{
const navigate = useNavigate();

    return(<div>
       <p> Home page</p>
       <button onClick={()=> navigate('orderplace')}>Place order</button>
    </div>)

}