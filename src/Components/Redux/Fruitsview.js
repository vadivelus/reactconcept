import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { deleteFruites } from './Slices/Fruitslice';

const Fruitsview=()=>
{
    const fruiselector = useSelector((state)=> state.fruitinfo);
    const mydispacch = useDispatch();
    const deletefruite =(indexvalue)=>
    {
        mydispacch(deleteFruites(indexvalue));
    }
    const mystule ={border:'1px solid black'}
    return(<div>
        <h3>Fruits from Redux</h3>
        {fruiselector.fruits.length>0
        ?
        <table>        
            <th style={mystule}>Fruit name</th><th style={mystule}>Action</th>
            {fruiselector.fruits.map((fruit, index)=> { return <tr style={mystule}><td style={mystule}>{fruit}</td> <td style={mystule}><button onClick={()=>deletefruite(index)}>Delete</button></td></tr>})}              
            </table>
        :
         <p>No records found.</p>}
    </div>)
}

export default Fruitsview