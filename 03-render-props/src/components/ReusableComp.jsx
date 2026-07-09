import { useState } from "react";

const ReusableComp = ({render}) => {
    const [counter, setCounter] = useState(0);
    
    const handleIncrement = () => {
        setCounter(prev => prev + 1);
    }
    const handleDecrement = () => {
        setCounter(prev => prev - 1);
    }

    return render(counter,handleIncrement,handleDecrement);
}

export default ReusableComp;