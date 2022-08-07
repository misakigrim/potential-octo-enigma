import logo from './logo.svg';
import './App.css';
import Reading from './components/Reading';
import SingleCardReading from './components/Spread';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// comment out later 
function Hello() {
  const params = useParams();
  return (
    <div>
      <p>{params.greeting}, {params.name} </p>
    </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<HomePage />} /> */}
          <Route path='/single' element={<Reading />}/>
          <Route path='/:greeting/:name' element={<Hello />}/>
          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
