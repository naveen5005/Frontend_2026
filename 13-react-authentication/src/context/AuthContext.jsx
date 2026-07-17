import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const context = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const handleLogin = async (userData) => {
        try {
            const response = await api.post("/api/auth/login", {
                email: userData.email,
                password: userData.password
            },
                {
                    withCredentials: true
                });

            console.log("Login Response:", response.data);

            const loggedInUser = {
                email: userData.email
            };

            setUser(loggedInUser);

            localStorage.setItem("user", JSON.stringify(loggedInUser));
            localStorage.setItem("token", response.data.accessToken);
            
            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const handleLogout = async () => {
        try {
            await api.post("/api/auth/logout");
        } catch (error) {
            console.log(error);
        } finally {
            setUser(null);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }
    return (
        <div>
            <context.Provider value={{ user, handleLogin, handleLogout }}>
                {
                    children
                }
            </context.Provider>
        </div>
    )
}

export default AuthContext;