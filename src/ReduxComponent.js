import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, add, deleted } from "./redux/actions/counterActions";


const ReduxComponent = () => {
    const counter = useSelector((state) => state.counter);
    const numbers = useSelector((state) => state.numbers)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter : {counter} </h2>
            <button onClick={() => { dispatch(increase()) }} style={{ margin: 10 }}>Increment</button>
            <button onClick={() => { dispatch(decrease()) }}>Decrement</button>
            <hr />
            <button onClick={() => { dispatch(add()) }} style={{ margin: 10 }}>Add</button>
            <button onClick={() => { dispatch(deleted()) }} style={{ margin: 10 }}>Delete</button>
            <h2>Constant Value :  {numbers + <br />} </h2>
        </div>
    )
}

export default ReduxComponent;