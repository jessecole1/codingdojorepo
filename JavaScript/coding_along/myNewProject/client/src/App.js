// Codeblock 5
// PART III - Codeblock 3
import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonForm from './components/PersonForm';
// import PersonList from './components/PersonList';
import Details from './components/Details';
import Update from './components/Update';
import {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <PersonList /> */}
        <Routes>
          <Route element={<Main/>} path="/people"/>
          <Route element={<Details />} path="/people/:id" />
          <Route element={<Update />} path="/people/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
