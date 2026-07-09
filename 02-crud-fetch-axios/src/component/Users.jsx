import { useEffect } from "react";
import { useState } from "react";

const Users = () => {
    const initialUser = {
        fname: "",
        gender: "",
        state: "",
        areasOfInterest: []
    }
    const [user, setUser] = useState(initialUser);
    const [users, setUsers] = useState([]);
    const [isEditIndex, setIsEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "areasOfInterest") {
            setUser(prev=>({
                ...prev,
                areasOfInterest : checked ? [...prev.areasOfInterest,value] : prev.areasOfInterest.filter((item,index)=>item !== value)
            }))
        } else {
            setUser(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleReset = () => {
        setUser(initialUser);
    }
    const handleAddUser = () => {
        fetch("http://localhost:3000/users" , {
            method: "POST",
            headers : { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        });
        handleReset();
        fetchDataFromServer()
    }
    const fetchDataFromServer = async () => {
        const response = await fetch("http://localhost:3000/users" , {
            method: "GET",
            headers : { 'Content-type': 'application/json' },
            body: null
        });

        const data = await response.json();
        setUsers(data);
    }
    const handleEditUser = (user) => {
        setUser(user);
        setIsEditIndex(user.id)
    }
    const handleUpdateUser = () => {
        fetch("http://localhost:3000/users/" + isEditIndex, {
            method: "PUT",
            headers : { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        });
        fetchDataFromServer();
        handleReset();
        setIsEditIndex(null);
    }
    const handleDeleteUser = (usr) => {
        fetch("http://localhost:3000/users/" + usr.id, {
            method: "DELETE",
            headers : { 'Content-type': 'application/json' },
            body: null
        });
        fetchDataFromServer();
    }
    useEffect(()=>{
        fetchDataFromServer();
    },[]);
    return (
        <div>
            <h1>Welcome to Users component</h1>
            <form>
                <label htmlFor="fname">Full Name : </label>
                <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                <label htmlFor="gender">Gender : </label>
                <input type="radio" name="gender" onChange={handleChange} value={"male"} checked={user.gender === "male"} /> Male
                <input type="radio" name="gender" onChange={handleChange} value={"female"} checked={user.gender === "female"} /> Female
                <input type="radio" name="gender" onChange={handleChange} value={"others"} checked={user.gender === "others"} /> Others <br />

                <label htmlFor="state">State : </label>
                <select name="state" value={user.state} onChange={handleChange}>
                    <option value="">--select--</option>
                    <option value="AP">AP</option>
                    <option value="TS">TS</option>
                    <option value="KA">KA</option>
                    <option value="MH">MH</option>
                </select> <br />

                <label htmlFor="areasOfInterest">Areas Of Interest : </label>
                <input type="checkbox" name="areasOfInterest" value={"HTML"} onChange={handleChange} checked={user.areasOfInterest.includes("HTML")} /> HTML
                <input type="checkbox" name="areasOfInterest" value={"CSS"} onChange={handleChange} checked={user.areasOfInterest.includes("CSS")} /> CSS
                <input type="checkbox" name="areasOfInterest" value={"JS"} onChange={handleChange} checked={user.areasOfInterest.includes("JS")} /> JS
                <input type="checkbox" name="areasOfInterest" value={"REACT JS"} onChange={handleChange} checked={user.areasOfInterest.includes("REACT JS")} /> REACT JS <br />

                {
                    isEditIndex === null ? <button type="button" onClick={handleAddUser}>Add User</button> : 
                    <button type="button" onClick={handleUpdateUser}>Update User</button>
                }
            </form> <br />
            <table border={2}>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>Areas Of Interest</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usr,index)=>(
                            <tr key={usr.id}>
                                <td>{usr.fname}</td>
                                <td>{usr.gender}</td>
                                <td>{usr.state}</td>
                                <td>{usr.areasOfInterest.join(", ")}</td>
                                <td>
                                    <button type="button" onClick={()=>handleEditUser(usr)}>Edit</button>
                                    <button type="button" onClick={()=>handleDeleteUser(usr)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;