import './App.css';
import ShowForm from './components/ShowForm'
import DisplayShows from './components/DisplayShows'
import {useState} from 'react';



function App() {
  const [showList, setShowList] = useState([])
  return (
    <div className="App">
      <ShowForm showList = {showList} setShowList = {setShowList}/>
      {/* \/ In the DisplayShows below, the 'setShowList = {setShowList} isn't necessary, but doesnt hurt to have */}
      <DisplayShows showList = {showList} setShowList = {setShowList}/>
    </div>
  );
}

export default App;
