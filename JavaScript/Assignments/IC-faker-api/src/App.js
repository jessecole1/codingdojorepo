import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Company from './components/Company';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';


function App() {



  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/api/users/new" element={<User />}/>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <User/>
    </div>
  );
}

export default App;
