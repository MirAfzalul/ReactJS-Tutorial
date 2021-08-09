import logo from './logo.svg';
import './App.css';
import Greets from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      {/* <Greets name= "asif" >
      <p>This is a paragraph</p>
      </Greets>
      <Greets name= "bashar">
        <button>Click me</button>
         </Greets>
      <Welcome name= "MIR"/>
      <Hello/> */}
      <Message/>
    </div>
  );
}

export default App;
