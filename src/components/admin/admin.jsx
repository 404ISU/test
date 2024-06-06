import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Dashboard from "./administrator/administarator";
const Admin=()=>{
  return(
    <Routes>
      <Route path='/admin' element={<Dashboard/>}/>
    </Routes>
  )
}
export default Admin