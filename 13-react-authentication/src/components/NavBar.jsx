import { useContext } from "react";
import { context } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const { handleLogout, handleLogin, user } = useContext(context);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const result = await handleLogin({
            email: "naveen@gmail.com",
            password: "123456"
        });
        if(result){
            navigate("/dashboard")
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Logged In User - {user ? user.email : "Guest"}</h1>
            <Link to={"/dashboard"}>Dashboard</Link>
            {
                user ? <button type="button" onClick={handleLogout}>Logout</button>
                    : <button type="button" onClick={handleSubmit}>Login</button>
            }

        </div>
    )
}

export default NavBar;