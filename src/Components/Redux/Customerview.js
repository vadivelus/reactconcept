import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useHistory } from 'react-router-dom';
import { deletecustomer } from './Slices/Customerslice';

const Customerview = () => {
    const mynav = useNavigate();
    const mydispatch =useDispatch();
    useEffect(()=>{

    },[]);
    const TDmystyle = {
        border: 'solid 0.3px'
    }
    const THstyle = {
        border: 'solid 0.3px',
        width: '20%'
    }
    const getcustomers = useSelector((state) => state.customerinfo);

    const dlecustomer=(data)=>
    {
        mydispatch(deletecustomer(data));
    }
    return (<div>
        <p style={{ textAlign: 'center', width: '50%', fontFamily: 'sans-serif', fontWeight: 'bold', color: 'grey' }}>Customer Details from Redux</p>
        <table style={{ width: '50%' }}>
            <tr><th style={THstyle}>S.NO</th><th style={THstyle}>Customer Name</th></tr>
            {getcustomers.length > 0 ? getcustomers.map((cust, index) => <tr key={index}><td>{index}</td> <td style={TDmystyle}>{cust}</td><td><button onClick={()=>dlecustomer(index)}>Delete</button></td></tr>) : <tr><td style={TDmystyle}>No records found.</td></tr>}
        </table>

        <button onClick={() => mynav('/Customermain')}>Back</button>
    </div>)
}
export default Customerview