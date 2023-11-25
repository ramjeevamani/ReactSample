import React,{useState} from "react";

function SimpleState(){
    const [b, setB] = useState(21)
    var a = 20;
    var clickefn= ()=> {
   setB(b+1)
    }
    return (
    <div className="App">
        <h1>This is State component</h1>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <button onClick={clickefn}>Increase</button>

    </div>
    )
}
export default SimpleState