import './App.css'
import Component from './Component';
import NavBar from './NavBar';
import SimpleState from './SimpleState'
import { Routes, Route } from 'react-router-dom'
import Users from './Users';
import Effect from './Effect';
import ChildToParent from './ChildToParent';
import UILibrary from './UiLibrary';
import ContextComponent from './ContextApi/ContextComponent';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReduxComponent from './ReduxComponent';
import CrudForm from './PostFields';
import Posts from './Posts';
import ReduxPosts from './PostsUpdated';
import EffectReducerComponent from './EffectReducerComponent';
import SmartphonesList from './SmartPhonesList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Component user={{ name: 'Ramu', role: "developer", mail: "rj.jeevamani@gmail.com" }}> </Component>} />
          <Route path='/state' element={<SimpleState />} />
          <Route path='/users' element={<Users />} />
          <Route path='/effect' element={<Effect />} />
          <Route path='/child' element={<ChildToParent />} />
          <Route path='/library' element={<UILibrary />} />
          <Route path='/context' element={<ContextComponent />} />
          <Route path='/redux' element={<ReduxComponent />} />
          <Route path='/crud' element={<CrudForm />} />
          <Route path='/post' element={<Posts />} />
          <Route path='/reduxpost' element={<ReduxPosts />} />
          <Route path='/effect-reducer' element={<EffectReducerComponent />} />
          <Route path='/smartphone' element={<SmartphonesList />} />
        </Routes>

      </div>
    </Provider>
  );
}

export default App;






