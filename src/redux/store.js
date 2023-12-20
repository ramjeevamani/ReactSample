import { combineReducers, createStore, applyMiddleware  } from "redux";
import counterReducer from "./reducer/counterReducer";
import postReducer from "./reducer/postReducer";
import effectReducer from "./reducer/effecrReducer";
import smartphonesReducer from "./reducer/smartphoneReducer";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer,
    data : effectReducer,
    smartphones : smartphonesReducer
  });
  
  // Create store with combined reducers
const store = createStore(rootReducer, applyMiddleware(thunk));
  

export default store;
