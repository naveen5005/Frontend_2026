import { useEffect } from "react";
import { useRef } from "react";

const UsersForm = () => {
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return (
        <div>
            <h1> welcome to useRef() auto focus.</h1>
            username : <input type="text" ref={inputRef} />
        </div>
    )
}

export default UsersForm;