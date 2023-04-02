import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=9-7')
    .then((response) => {
      console.log(`RESPONSE: ${response.data.results}`);
      setPokemonList(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      {
        pokemonList.map((poke) => (
          <div>
            <h2>{poke.name}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
