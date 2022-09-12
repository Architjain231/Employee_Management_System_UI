import React from 'react'
import CreateEmployee from './CreateEmployee'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeList from './EmployeeList'
import UpdateEmployee from './UpdateEmployee'
const MainScreen = () => {
  return (
      <>
       <BrowserRouter>
       <Routes>
           <Route index element={<CreateEmployee/>}></Route>
           <Route path="/" element={<CreateEmployee/>}></Route>
           <Route path="/addEmployee" element={<CreateEmployee/>}></Route>
           <Route path="/getEmployees" element={<EmployeeList/>}></Route>
           <Route path="/employee/:id" element={<UpdateEmployee/>}></Route>
       </Routes>
       </BrowserRouter>
      </>
  )
}

export default MainScreen