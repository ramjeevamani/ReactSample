import React,{useState} from "react";
import Siblings1 from "./Siblings1";
import Siblings2 from "./Siblings2";

function ChildToParent(props){
    const [text, setText] = useState("basuc")

    return(
        <div className="row">
            <div className="col-md-12">
                <h1>Input val : {text}</h1>
            </div>
            <Siblings1 text={text} setText={setText}/>
            <Siblings2 text={text} setText={setText}/>
        </div>
    )

}
export default ChildToParent;
