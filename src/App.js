import logo from './logo.svg';
import './App.css';
import Greets from './components/Greet'
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
      <Greets />
      <Welcome/>
    </div>
  );
}

export default App;
