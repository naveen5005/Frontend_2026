import { useState } from "react";
import withCounter from "./withCounter";

const MouseCounter = ({counter,handleIncrement,handleDecrement}) => {
    
    return (
        <div>
            <h1>welcome to click counter.</h1>
            <p>counter - {counter}</p>
            <button type="button" onMouseOver={handleIncrement} style={{marginRight : "15px"}}>Increment</button>
            <button type="button" onMouseOver={handleDecrement}>Decrement</button>
        </div>
    )
}

export default withCounter(MouseCounter);