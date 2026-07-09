import { useState } from "react";

const useCounter = () => {
    const [counter,setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(prev => prev + 1);
    }

    const handleDecrement = () => {
        setCounter(prev => prev - 1);
    }

    return {
        counter, handleIncrement, handleDecrement
    }
}

export default useCounter;