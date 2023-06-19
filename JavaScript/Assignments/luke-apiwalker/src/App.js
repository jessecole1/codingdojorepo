import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import { BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import {useState} from 'react';

function App() {

  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  // useEffect(() => {
  //   axios.get('https://swapi.dev/api/')
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, []);

  return (
    <div className="App">
        <Form category={category} setCategory={setCategory} id={id} setId={setId} />
        {/* <Form /> */}
        {/* <Link to="/people">People</Link>
        <Link to="/planets">Planets</Link> */}
        <Router>
          <People path="/people/:id" id={id}/>
          <Planets path="/planets/:id"/>
        </Router>
    </div>
  );
}

export default App;
