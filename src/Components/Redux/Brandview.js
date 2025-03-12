import React from 'react';
import { useSelector } from 'react-redux';
const Brandview =()=>
{
    const brandlist = useSelector((state)=> state.brandsinfo);
    return(<div>
        {brandlist.brands.length > 0 ?
        (<ul>
        {brandlist.brands.map((brand, index)=> {
          return <li>{brand}</li>
        })}
    </ul>)
        :
        <p>No records found.</p>
        }
        
    </div>)
}

export default Brandview