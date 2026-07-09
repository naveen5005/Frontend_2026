import { useState } from "react";

const ClickCounter = ({counter,handleIncrement,handleDecrement}) => {
    return(
        <div>
            <h1>Welcome to Click Counter</h1>
            <p>Counter = {counter}</p>
            <button type="button" onClick={handleIncrement} style={{marginRight : "15px"}}>Increment</button> 
            <button type="button" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default ClickCounter;