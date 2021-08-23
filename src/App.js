import logo from './logo.svg';
import './App.css';
import Greets from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <Stylesheet primary={true}/>
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Greets name= "asif" >
      <p>This is a paragraph</p>
      </Greets>
      <Greets name= "bashar">
        <button>Click me</button>
         </Greets>
      <Welcome name= "MIR"/>
      <Hello/> 
      <Message/>
      <Counter/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/>  */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
   
    
    </div>
  );
}

export default App;
