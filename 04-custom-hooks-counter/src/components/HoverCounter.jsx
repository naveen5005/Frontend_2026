import useCounter from "../hooks/useCounter";

const HoverCounter = () => {
    const {counter,handleIncrement,handleDecrement} = useCounter();

    return(
        <div>
            <h1>Welcome to Hover counter</h1>
            <p>counter - {counter}</p>
            <button type="button" onMouseOver={handleIncrement} style={{marginRight:"15px"}}>Increment</button>
            <button type="button" onMouseOver={handleDecrement}>Decrement</button>
        </div>
    )
}

export default HoverCounter;