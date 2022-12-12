import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './component/Login/Login';
import Profile from './component/Login/Profile';
import Search from './component/Login/Search';


function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
      <Search/>
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<Profile/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 


export default App;