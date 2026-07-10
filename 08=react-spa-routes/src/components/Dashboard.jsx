import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h1>welcome to Dashboard component.</h1>
            <Link to={"users"}>Users</Link>
            <Outlet />
        </div>
    )
}

export default Dashboard;