import logo from './logo.svg';
import './App.css';
import Reading from './components/Reading';
import SingleCardReading from './components/SingleCardReading';

function App() {
  return (
    <div>
      <nav>
        <h4>Home</h4>
        <h4>Single Card Reading</h4>
      </nav>
      <SingleCardReading />
    </div>
  );
}

export default App;
