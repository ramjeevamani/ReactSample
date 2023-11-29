import './App.css'
import Component from './Component';
import NavBar from './NavBar';
import SimpleState from './SimpleState'
import { Routes, Route } from 'react-router-dom'
import Users from './Users';
import Effect from './Effect';
import ChildToParent from './ChildToParent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Component user={{ name: 'Ramu', role: "developer", mail: "rj.jeevamani@gmail.com" }}> </Component>} />
        <Route path='/state' element={<SimpleState />} />
        <Route path='/users' element={<Users />} />
        <Route path='/effect' element={<Effect />} />
        <Route path='/child' element={<ChildToParent />} />
      </Routes>


    </div>
  );
}

export default App;







// <Routes>
// <Route></Route>
// <NavBar />
// <h1 >Hello React</h1>
// <button>Click me</button>
// <Component  user= { {name:'Ramu', role:"developer", mail:"rj.jeevamani@gmail.com"}}> </Component>
// <SimpleState />
// </Routes>
