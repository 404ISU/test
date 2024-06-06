import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Hero from './hero/hero'
import Catalog from "./catalog/catalog";

const Home=()=>{
  return(
      <Routes>
  <Route path='/hero' element={<Hero/>}/>
  <Route path='/catalog' element={<Catalog/>}/>
</Routes>
  )

}
export default Home