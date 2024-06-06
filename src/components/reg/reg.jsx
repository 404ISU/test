import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Registration from './registration/registration'
const Reg=()=>{
  return(
    <Routes>
    <Route path='/registration' element={<Registration/>}/>
  </Routes>
  )
}
export default Reg