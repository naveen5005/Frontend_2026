import { useState } from "react";

const MouseCounter = ({counter,handleIncrement,handleDecrement}) => {
    return(
        <div>
            <h1>Welcome to Mouse Counter</h1>
            <p>Counter = {counter}</p>
            <button type="button" onMouseOver={handleIncrement} style={{marginRight : "15px"}}>Increment</button> 
            <button type="button" onMouseOver={handleDecrement}>Decrement</button>
        </div>
    )
}

export default MouseCounter;