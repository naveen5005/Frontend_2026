import { useState } from "react";
import withCounter from "./withCounter";

const ClickCounter = ({counter,handleIncrement,handleDecrement}) => {
    return (
        <div>
            <h1>welcome to click counter.</h1>
            <p>counter - {counter}</p>
            <button type="button" onClick={handleIncrement} style={{marginRight : "15px"}}>Increment</button>
            <button type="button" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default withCounter(ClickCounter);