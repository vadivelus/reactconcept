import logo from './logo.svg';
import './App.css';
import React, { useContext, useState } from 'react';

const employeecontext = React.createContext();

function App()
{
  const [employee, setemployee]= useState({Id:100,Name:"Kumar",Location:"Coimbatore",Salary:45000});
  return(
    <div>
      <h3>This is [Parent] component.</h3>
      <p>
        <label><span style={{fontWeight:'bold'}}>Employee ID:</span> {employee.Id}</label>
      </p>
      <p>
        <label><span style={{fontWeight:'bold'}}>Employee Name: </span>{employee.Name}</label>
      </p>
    
     
      <br></br>
      <employeecontext.Provider value={employee}>
      <ChildA></ChildA>
      </employeecontext.Provider>
      <br></br>
      <employeecontext.Provider value={employee}>
      <ChildB></ChildB>
      </employeecontext.Provider>
    </div>
  );
}

function ChildA()
{
  let getemployecontext = useContext(employeecontext);
  
  return(
    <div> 
      <h3>This is [Child A] component</h3>
      <br></br>
      <p>
        <label><span style={{fontWeight:'bold'}}>Employee Location: </span>{getemployecontext.Location}</label>
      </p>
     
    </div>
  );
}

function ChildB()
{
  let getemplodetails = useContext(employeecontext);
  
  return(
    <div>
      <h3>This is [Child B] component</h3>
      <br></br>
      <p>
        <label><span style={{fontWeight:'bold'}}>Employee Salary: </span>{getemplodetails.Salary}</label>
      </p>
     
    </div>
  );
}

export default App;
