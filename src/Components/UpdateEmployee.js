import React, { useState ,useEffect } from 'react'
import EmployeeService from '../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateEmployee = () => {

    const navigate=useNavigate();
    const {id}=useParams();
    
    const [employee, setEmployee] = useState({
      id:id,
      firstName:"",
        lastName :"",
        emailId  :""
       
     });

   useEffect(() => {
      const fetchData=async ()=>{
           try{
            const response=await EmployeeService.getEmployeeById(id);
            setEmployee(response.data);
           }
           catch(error)
           {
               console.log(error);
           }
      }
      fetchData();
      // eslint-disable-next-line
    },[]);

  const handleSubmit=(e)=>{
      e.preventDefault();
       EmployeeService.updateEmployee(id,employee).then((response)=>{
          navigate("/getEmployees");
       }).catch((error)=>{
          console.log(error);
       });
  }
  const handleChange=(e)=>{
    
     
     setEmployee({...employee,[e.target.name]:e.target.value})
  }
  const cancel=(e)=>
  {
      e.preventDefault();
      navigate("/getEmployees/");
  }

  return (
    <div className="container">
        <form onSubmit={(e)=>{handleSubmit(e);}}>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
          <input type="text" className="form-control" onChange={(e)=>{handleChange(e);}} id="exampleFormControlInput1" name="firstName" value={employee.firstName} placeholder="FirstName"/>
         </div>
         <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
          <input type="text" className="form-control" onChange={(e)=>{handleChange(e);}} id="exampleFormControlInput1" name="lastName" value={employee.lastName} placeholder="LastName"/>
         </div>
         <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email Id</label>
          <input type="email" className="form-control" onChange={(e)=>{handleChange(e);}} id="exampleFormControlInput1" name="emailId" value={employee.emailId} placeholder="EmailId"/>
         </div>
         <input type="submit" className="bg-success" value="Update"/>
          <button onClick={cancel} className="bg-success mx-3">Cancel</button>
         </form>
        
        
    </div>
  
  )
}

export default UpdateEmployee