import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Profile from './userprof/userprof'

const User=()=>{
  return(
      <Routes>
        <Route path='/user' element={<Profile/>}/>
      </Routes>
  )
}
export default User