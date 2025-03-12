import { NavLink } from "react-router-dom";

export default function Navbar ()
{
    return(
        <nav className="myclass">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Product'>Product</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/ContacT'>Contact</NavLink>
        <NavLink to='lazyload'>Lazy load</NavLink>
        <NavLink to='/Customermain'>Redux CRUD</NavLink>
        <NavLink to='/Customerview'>List Customer</NavLink>
        <NavLink to='/Fruitadd'>Add Fruits</NavLink>
        <NavLink to='/Fruitview'>List Fruits </NavLink>
        <NavLink to='/Bublingcapture'>Bubbling even propgation capture</NavLink>
        </nav>
    )
}