import React, { useContext, useState } from "react";

const employeecontext = React.createContext();
function Parentcomponent()
{
    const [employeedetails, setemployeedetails] = useState({ID:100, Name:'Kathir', Location:'Thidukal', Salary:80000});
    return(
        <div>
            <p>
            <label>
                This is parent component.
            </label>
            </p>   
            <employeecontext.Provider value={{data:employeedetails,updateemployee:setemployeedetails}}> 
                <ChildA></ChildA>
                </employeecontext.Provider>      
        </div>
    );
}

function ChildA()
{
    let getemployeecontext = useContext(employeecontext);
    return(
        <div>
            <p>
                <lable>
                    This is childA component.
                </lable>
            </p>
            <p>
                <label>
                    Employee ID: {getemployeecontext.data.ID}
                </label>
            </p>
            <p>
                <label>
                    Employee salary: {getemployeecontext.data.Salary}
                </label>
            </p>
            <ChildB></ChildB>
        </div>
    );
}

function ChildB()
{
    let contextemployee = useContext(employeecontext);
    function editemployee()
    {
        contextemployee.updateemployee({...contextemployee.data,Salary:6000})
    }
    return(
        <div>
            <p>
                <lable>
                    This is childB component.
                </lable>
            </p>
            <p>
                <label>
                    Employee Name: {contextemployee.data.Name}
                </label>
            </p>
           
            <p>
                <button onClick={editemployee}>Update</button>
            </p>
        </div>
    );
}

export default Parentcomponent