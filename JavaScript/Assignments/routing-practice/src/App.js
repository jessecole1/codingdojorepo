import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Welcome</h1>
    </div>
  )
}

const String = (props) => {
  const {string} = useParams();
  let isNumOrStr = isNaN(string);
  console.log(isNumOrStr);
  if (isNumOrStr === true) {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>The word is: {string}</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>The number is: {string}</h1>
      </div>
    )
  }
}

// const String = (props) => {
//   const {string} = useParams();
//   return (
//     <div>
//       <h1 style={{textAlign: "center"}}>The word is: {string}</h1>
//     </div>
//   )
//   }

const Color = (props) => {
  const colors = []
  const {string, color} = useParams();
  colors.push(color);
  return (
    <div>
      <h1 className={colors} style={{textAlign: "center", color: colors}}>The word is: {string}</h1>
    </div>
  )
}

const BackgroundColor = (props) => {
  const colors = []
  const bColors = []
  const {string, color, bColor} = useParams();
  colors.push(color);
  bColors.push(bColor);

  return (
    <div>
      <h1 style={{textAlign: "center", color: colors, backgroundColor: bColors}}>The word is: {string}</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:string" element={<String />}/>
        <Route path="/:string/:color" element={<Color />}/>
        <Route path="/:string/:color/:bColor" element={<BackgroundColor />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
