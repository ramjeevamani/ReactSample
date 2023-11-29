import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import ContextInput from "./ContextInput";
import { useSelector } from "react-redux";

function ContextChild3(props) {
    const { text, setText } = useContext(MyContext);
    const counter = useSelector((state)=> state.counter);
    return (
        <div>
            <h2>  Context Componment3 {text} {counter} </h2>
            <ContextInput />

        </div>
    )
}
export default ContextChild3;