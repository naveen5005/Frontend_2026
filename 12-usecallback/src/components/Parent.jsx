import { useState } from "react";
import Child from "./Child";
import { useCallback } from "react";

function Parent() {
    console.log("parent rendered...!!!")
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    },[]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Count {count}
            </button>

            <Child onClick={handleClick} />
        </>
    );
}

export default Parent;