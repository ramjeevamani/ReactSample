import React from "react";

function Siblings2(props){

    return(
        <div className="col-md-6">
            <h1>Parent to child1</h1>
            <input value={props.text} onChange={(e)=>{props.setText(e.target.value)}}/>
        </div>
    )

}
export default Siblings2;