import useCounter from "../hooks/useCounter";

const ClickCounter = () => {
    const {counter,handleIncrement,handleDecrement} = useCounter();
    
    return(
        <div>
            <h1>Welcome to Click Counter.</h1>
            <p>counter - {counter}</p>
            <button type="button" onClick={handleIncrement} style={{marginRight:"15px"}}>Increment</button>
            <button type="button" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default ClickCounter;