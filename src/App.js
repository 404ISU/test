import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/header'
import Footer from './components/footer/footer'
// import Hero from './components/main/home/hero/hero'
// import Catalog from './components/main/home/catalog/catalog';
// import Authification from './components/auth/author/author';
// import Registration from './components/reg/registration/registration';
// import Profile from './components/user/userprof/userprof';
// import Dashboard from './components/admin/administrator/administarator';
import Home from './components/main/home/home';
import User from './components/user/user';
import Auth from './components/auth/auth';
import Reg from './components/reg/reg';
import Admin from './components/admin/admin';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
      <User/>
      <Auth/>
      <Reg/>
      <Admin/>
      <Footer/>
    </BrowserRouter>

  )
}

