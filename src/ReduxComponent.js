import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./redux/actions/counterActions";


const ReduxComponent =() => {
    const counter = useSelector((state)=> state.counter);
    const dispatch = useDispatch();
    console.log(counter, 'sssssss')
    return (
        <div>
            <h2>Counter : {counter } </h2>
            <button onClick={()=>{dispatch(increase())}} style={{margin:10}}>Increment</button>
            <button onClick={()=>{dispatch(decrease())}}>Decrement</button>
        </div>
    )
}

export default ReduxComponent;