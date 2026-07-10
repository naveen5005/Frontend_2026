import { useContext } from "react";
import UserContext from "../context/UserContext";

const Salary = () => {
    const {name,role} = useContext(UserContext);
    return(
        <div>
            <h1>Welcome to salary component.</h1>
            <p>Name : {name}</p>
            <p>Role : {role}</p>
        </div>
    )
}

export default Salary;