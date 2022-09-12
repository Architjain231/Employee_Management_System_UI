import React, { useState } from 'react'
import EmployeeService from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
   const navigate=useNavigate();
  const [employee, setEmployee] = useState({
     firstName:"",
     lastName :"",
     emailId  :""
  });
  const handleSubmit=(e)=>{
   e.preventDefault();
       EmployeeService.addEmployee(employee);
       reset(e);
  }
  const handleChange=(e)=>{
      const value=e.target.value
     setEmployee({...employee,[e.target.name]:value})
  }
  const reset=(e)=>
  {
      e.preventDefault();
     setEmployee({
        firstName:"",
        lastName :"",
        emailId  :""
     });
  }

  return (
    <div className="container">
           <div className="my-5">
    <button onClick={()=>{navigate("/getEmployees")}} type="button" className="btn btn-primary">Show Employees</button>
    </div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
          <input type="text" className="form-control" onChange={(e)=>{handleChange(e)}} id="exampleFormControlInput1" name="firstName" value={employee.firstName} placeholder="FirstName"/>
         </div>
         <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
          <input type="text" className="form-control" onChange={(e)=>{handleChange(e)}} id="exampleFormControlInput1" name="lastName" value={employee.lastName} placeholder="LastName"/>
         </div>
         <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email Id</label>
          <input type="email" className="form-control" onChange={(e)=>{handleChange(e)}} id="exampleFormControlInput1" name="emailId" value={employee.emailId} placeholder="EmailId"/>
         </div>
         <input type="submit" className="bg-success" value="Save"/>
          <button onClick={reset} className="bg-success mx-3">Clear</button>
         </form>
        
        
    </div>
  
  )
}

export default CreateEmployee