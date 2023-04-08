import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

function App() {

  const [starWarsList, setStarWarsList] = useState([]);

  const [planetList, setPlanetList] = useState([]);

  const People = (props) => {
    const {params} = useParams();
    useEffect(() => {
      axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        setStarWarsList(response.data.results);
        // console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
    }, []);
    return (
      <div>
        {
          starWarsList.map((j,i) => {
            return (
              <p key={i}>{j.name}</p>
            )
          })
        }
      </div>
    )
  }

  const Planets = (props) => {
    const {params} = useParams();
    useEffect(() => {
      axios.get('https://swapi.dev/api/planets/')
      .then((response) => {
        setPlanetList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
    }, []);
  
    return (
      <div>
        {
          planetList.map((j,i) => {
            return (
              <p key={i}>{j.name}</p>
            )
          })
        }
      </div>
    )
    }


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
      <BrowserRouter>
        <form>
          <select>
            <option value={<Link to="/people"/>}>
              People
            </option>
            <option value={<Link to="/planets"/>}>
              Planets
            </option>
          </select>
        </form>
        {/* <Link to="/people">People</Link>
        <Link to="/planets">Planets</Link> */}
        <Routes>
          <Route path="/people" element={<People />}/>
          <Route path="/planets" element={<Planets />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
