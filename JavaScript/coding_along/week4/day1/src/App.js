import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1 style={{color: "red"}}>Home Component</h1>
      <Link to={'/about'}>Go to About</Link>
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h1 style={{color: "blue"}}>About Component</h1>
      <Link to={'/'}>Go to Home</Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">

      {/* BrowserRouter exists to wrap around all of the components we want to be aware of our current route */}
      <BrowserRouter>
        <h1>Routing Example</h1>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
