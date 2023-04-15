import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Main from './components/Main';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/product" default />
          <Route element={<Details />} path="/product/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
