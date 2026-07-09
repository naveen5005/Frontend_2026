import { useState } from "react";

const withCounter = (OriginalComponent) => {
    const NewComponent = () => {
        const [counter, setCounter] = useState(0);
        const handleIncrement = () => {
            setCounter(prev => prev + 1);
        }
        const handleDecrement = () => {
            setCounter(prev => prev - 1);
        }
        return <OriginalComponent counter = {counter} handleIncrement = {handleIncrement} handleDecrement = {handleDecrement}/>
    }

    return NewComponent;
}

export default withCounter;