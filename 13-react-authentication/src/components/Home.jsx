import { useContext } from "react";
import { context } from "../context/AuthContext";

const Home = () => {
    const data = useContext(context);
    return(
        <div>
            <h1>welcome to home component</h1>
        </div>
    )
}

export default Home;