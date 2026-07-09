import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

const Products = () => {
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
    const handleAddUser = async() => {
        await Axios.post("http://localhost:3000/users", user)
        handleReset();
        await fetchDataFromServer()
    }
    const fetchDataFromServer = async () => {
        const response = await Axios.get("http://localhost:3000/users")
        setUsers(response.data);
    }
    const handleEditUser = (user) => {
        setUser(user);
        setIsEditIndex(user.id)
    }
    const handleUpdateUser = async () => {
        await Axios.put("http://localhost:3000/users/" + isEditIndex, user)
        await fetchDataFromServer();
        handleReset();
        setIsEditIndex(null);
    }
    const handleDeleteUser = async (usr) => {
        await Axios.delete("http://localhost:3000/users/" + usr.id)
        await fetchDataFromServer();
    }
    useEffect(()=>{
        fetchDataFromServer();
    },[]);
    return (
        <div>
            <h1>Welcome to Products component</h1>
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

export default Products;