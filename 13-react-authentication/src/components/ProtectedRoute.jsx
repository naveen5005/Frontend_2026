import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { context } from "../context/AuthContext";


const ProtectedRoute = ({children}) => {
    const {user}=useContext(context);

    if(!user){
        return <Navigate to="/login" replace/>
    }
    
    return children;
}


export default ProtectedRoute;