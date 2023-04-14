import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {

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
        <Form />
        {/* <Link to="/people">People</Link>
        <Link to="/planets">Planets</Link> */}
        <Router>
          <People path="/people/:id"/>
          <Planets path="/planets/:id"/>
        </Router>
    </div>
  );
}

export default App;
