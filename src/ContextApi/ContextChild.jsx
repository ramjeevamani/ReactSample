import React from "react";
import ContextChild2 from "./ContextChild2";

function ContextChild(props){
    return(
        <div>
            <h1>Context Child component</h1>
            <ContextChild2 text={props.text} />
        </div>
    )
}
export default ContextChild;