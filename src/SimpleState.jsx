import React, { useState } from "react";
import './App.css'

function SimpleState() {
    const [b, setB] = useState(21)
    var clickefn = () => {
        setB(b + 1)
    }
    return (

        <div className="App">
            <h1>This is State component</h1>
            <button onClick={clickefn}>Increase</button>
            <h1>{b}</h1>
            <div className="App">
                <span className={b % 2 == 0 ? "even" : "odd"} style={{ height: 100, width: 100 }}>
                    <h2 >{b % 2 == 0 ? "It is a Even " : "It is a Odd"}</h2>
                </span>
            </div>


        </div>

    )
}
export default SimpleState