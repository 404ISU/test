import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Authentication from "./author/author";
const Auth=()=>{
  return(
    <Routes>
      <Route path='/auth' element={<Authentication/>}/>
    </Routes>
  )
}
export default Auth