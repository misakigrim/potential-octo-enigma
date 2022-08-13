import './App.css';
import Single from './components/Single';
import Spread from './components/Spread';
import HomePage from './components/HomePage'
import About from './components/About';
import TarotIndex from './components/TarotIndex';
import ChooseCard from './components/ChooseCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/single' element={<Single />}/>
          <Route path='/spread' element={<Spread />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/index' element={<TarotIndex />}/>
          <Route path='/:suit/:number' element={<ChooseCard />}/>
          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
