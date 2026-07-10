import { useParams } from "react-router-dom";

const UserDetails = () => {
    const params = useParams();
    return(
        <div>
            <h1>welcome to user details component - {params.id}</h1>
        </div>
    )
}

export default UserDetails;