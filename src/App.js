import './App.css'
import Component from './Component';
import SimpleState from './SimpleState'

function App() {
  return (
    <div className="App">
   <h1 >Hello React</h1>
   <button>Click me</button>
   <Component  user= { {name:'Ramu', role:"developer", mail:"rj.jeevamani@gmail.com"}}> </Component>
   <SimpleState />
   </div>
  );
}

export default App;
