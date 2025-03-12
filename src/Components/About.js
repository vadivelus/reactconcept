import React from 'react';
import { useSelector } from 'react-redux';

export default function About()
{
    const dfsdf = useSelector((state)=> state.customerinfo);

    return(<div>
        <p>About page</p>
        <p> {dfsdf && dfsdf.map((val)=> <li>{val}</li>)} </p>
    </div>)
}