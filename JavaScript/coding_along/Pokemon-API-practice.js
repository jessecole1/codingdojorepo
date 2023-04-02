// Just using a .js file, this should be in a react app


import { useEffect } from "react";

function App() {
    // pokemon will be an array of pokemon from the Pokemon API
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9-7')
        .then(response => {return response.json()})
        .then(response => {setPokemon(response.results)})
        .catch((err) => {console.log(err)})
        
    }, []);

    return (
        <div className="App" style={{width: "200px", margin: "auto"}}>
            <ul>
                {
                    pokemon.map((pokemonObj, index) => {
                        return (<li key={index}>{pokemonObj.name}</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default App;