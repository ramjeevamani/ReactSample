import React from "react";
import ContextChild3 from "./ContextChild3";

function ContextChild2(props){
    return(
        <div>
            <h1>Context Component2</h1>
            <ContextChild3 text={props.text} />
        </div>
    )
}
export default ContextChild2;