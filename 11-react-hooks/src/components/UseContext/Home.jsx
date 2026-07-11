import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div style={{background: theme === "light" ? "white" : "black",}}>
            <h1 style={{color : theme === "light" ? "black" : "white"}}>welcome to home component.</h1>
            <p style={{color : theme === "light" ? "black" : "white"}}>current theme = {theme}</p>
            <button
                onClick={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                }
            >
                Toggle Theme
            </button>
        </div>
    )
}

export default Home;