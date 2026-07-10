import { Link } from "react-router-dom";

const Users = () => {
    return (
        <div>
            <p>welcome to users component</p>
            <ul>
                <li><Link to="1">User 1</Link></li>
                <li><Link to="2">User 2</Link></li>
                <li><Link to="3">User 3</Link></li>
            </ul>
        </div>
    )
}
export default Users;