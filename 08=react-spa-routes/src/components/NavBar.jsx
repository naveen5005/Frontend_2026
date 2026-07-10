import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <ol style={{listStyle : "none"}}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
            </ol>
        </div>
    )
}


export default NavBar;