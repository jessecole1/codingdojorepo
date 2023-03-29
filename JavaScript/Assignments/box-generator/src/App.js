import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import DisplayBox from './components/DisplayBox'
import {useState} from 'react';

function App() {
  const [boxList, setBoxList] = useState([])
  return (
    <div className="App">
      <BoxForm x = {boxList} y = {setBoxList}/>
      <DisplayBox boxList = {boxList} />
    </div>
  );
}

export default App;
