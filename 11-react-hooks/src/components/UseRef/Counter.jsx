import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Counter = () => {
    const [counter,setCounter] = useState(0);
    const previous = useRef(0);
    
    useEffect(()=>{
        previous.current = counter
    },[counter]);
    
    return (
        <div>
            <h1>Welcome to counter function.</h1>
            <p>counter - {counter}</p>
            <p>previous counter  - {previous.current}</p>
            <button type="button" onClick={()=>setCounter(prev => prev + 1)}>add</button>
        </div>
    )
}

export default Counter;