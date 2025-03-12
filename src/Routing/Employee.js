import React, { useEffect, useState } from 'react';

function Employee()
{
const [employeedetails, setemployeedetails] = useState([]);

useEffect(()=>
{
    setemployeedetails([{Id:100, Name:'Jay', Location:'Sathy', Salary:60000},
        {Id:101, Name:'Parthi', Location:'kunamuthu', Salary:70000},
        {Id:102, Name:'velu', Location:'saravanamp', Salary:40000},
        {Id:103, Name:'sam', Location:'nambiyur', Salary:60000}]
    );
});

return(
<div>
    {employeedetails.map(
        item=>(
   <> <p>
        <label> 
            Employee ID : {item.Id}
        </label>
    </p>    
    <p>
    <label> 
            Employee Name : {item.Name}
        </label>
    </p>
    <p>
    <label> 
            Employee Location : {item.Location}
        </label>
    </p>
    <p>
    <label> 
            Employee Salary : {item.Salary}
        </label>
    </p>
    <hr></hr>
    </>
        )
    )}
    
</div>

)

}

export default Employee
