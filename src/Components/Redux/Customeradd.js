import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setcustomerrdx } from './Slices/Customerslice';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';

const Customeradd =()=>
{
    const dfsdf = useSelector((state)=> state.customerinfo);
    const mynavigate = useNavigate();
    const dispatch = useDispatch(); //used for dispatch that action
    
    const [customer, setcustomer] = useState('');
    const [Customerlist, setCustomerlist] =useState([]);
    
    // console.log(dfsdf);
    // const Getcustomerlist=(e)=>    
    //     {    
    //     const cuslist = useSelector((state)=> state.customerinfo
    //     );
    //     console.log(cuslist);
    // }

    const addnewcustomer=(e)=>{
        setCustomerlist((previousStat)=> [...previousStat, customer]);
        setcustomer('');
        //redux insert
        dispatch(setcustomerrdx(customer));
       mynavigate('/Customerview', {replace:true});
    }
   
    return(<div>
        <input value={customer} onChange={(e)=>setcustomer(e.target.value)}></input>
        <button onClick={()=>addnewcustomer()}>Add customer</button>
        {/* {Customerlist && Customerlist.map((customer) => <li>{customer}</li>)} */}
       
       {/* <button onClick={()=>Getcustomerlist()}>Get customer</button> */}
       <br></br>
       <hr></hr>
       <NavLink style={({isActive})=> (isActive ? {fontWeight : 'bold', padding:'5px', textDecoration:'none', color:'GrayText',  fontFamily:'sans-serif', backgroundColor:'yellow'} : {padding:'5px', textDecoration:'none', color:'GrayText',  fontFamily:'sans-serif', backgroundColor:'yellow'})} to='Brandadd'>Add Brand |</NavLink>
       <NavLink style={({isActive}) => isActive ? {fontWeight:'bold', padding:'5px', textDecoration:'none', color:'GrayText',  fontFamily:'sans-serif', backgroundColor:'yellow'} : {padding:'5px', textDecoration:'none', color:'GrayText',  fontFamily:'sans-serif', backgroundColor:'yellow'}} to='Bandview'>List Brand</NavLink>
    <Outlet/>
    </div>)
}

export default Customeradd