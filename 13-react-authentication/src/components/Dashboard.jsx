import { useEffect } from "react";
import api from "../api/api";

const Dashboard = () => {

    useEffect(() => {
        api.get("/api/auth/profile")
            .then((response) => {
                console.log(response.data);
            }).catch((error)=>{
                console.log("error from dashbaord : ",error)
            })
    }, []);
    return (
        <div>
            <h1>welcome to Dashboard</h1>
        </div>
    )
}

export default Dashboard;