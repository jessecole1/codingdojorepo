import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter, 
  Link,
  Routes,
  Route
} from 'react-router-dom';

// NEW: import useParams 
import { useParams } from 'react-router-dom';

const Location = (props) => {
  // NEW: 
  const { city } = useParams();
  return (
    <h1>Welcome to { city }</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        | 
        <Link to="/location/chicago">Chicago</Link>
        | 
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
