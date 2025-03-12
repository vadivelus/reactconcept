import React from 'react';
import Employee from './Employee';
import Department from './Department';
import Projects from './Projects';
import { BrowserRouter,Link, Switch,Route,Routes } from 'react-router-dom';

function Mainmenu()
{
    return(
        <div>
            <h3>Main menu</h3>
            <ul>
                <li><Link to='/employee'>Employee</Link></li>
                <li> <Link to='/department'>Department</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
           <Routes>
            <Route path='/employee' component={Employee}></Route>
            <Route path='/department' component={Department}></Route>
            <Route path='/project' component={Projects}></Route>
            </Routes>
        </div>
    )
}

export default Mainmenu