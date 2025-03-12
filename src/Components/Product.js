import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

const Product =()=>
{
    return(
        <>
        <div><h3 style={{textAlign:'center', width:'25%'}}>Product list</h3></div>
        
<nav style={{paddingLeft:'30px'}}>
    <NavLink to='Newproduct'>New Product</NavLink>
    <NavLink to='Featureproduct'>Feature product</NavLink>
</nav>
<Outlet />
        </>
    )
}

export default Product