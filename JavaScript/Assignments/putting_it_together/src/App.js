import logo from './logo.svg';
import './App.css';

import Person from "./components/Person";

const peopleArr = [
  {
    firstName:"Jesse",
    lastName:"Cole",
    age:29,
    hairColor:"Brown"
  },
  {
    firstName:"Kasey",
    lastName:"Sanders",
    age:29,
    hairColor:"Blonde"
  }
]

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <Person 
        key = {index}
        firstName={personObj.firstName}
        lastName = {personObj.lastName}
        age = {personObj.age}
        hairColor = {personObj.hairColor} />
      )
      )}
    </div>
  );
}

export default App;
