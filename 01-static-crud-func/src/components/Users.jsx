import { useState } from "react";

const Users = () => {
    const initialUser = {
        fname:"",
        gender:"",
        state:"",
        areasOfInterest:[]
    };
    const [user, setUser] = useState(initialUser);
    const [users, setUsers] = useState([
        {
            fname: "Naveen Bellam",
            gender: "male",
            state: "AP",
            areasOfInterest: ["JS", "CSS"]
        }
    ]);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        if(name === "areasOfInterest"){
            setUser(prev => ({
                ...prev,
                areasOfInterest: checked ? [...prev.areasOfInterest,value] :
                prev.areasOfInterest.filter((item,index)=>item !== value)
            }))
        } else{
            setUser(prev=>({
                ...prev,
                [name]: value
            }))
        }
    }
    const handleReset = () => {
        setUser(initialUser);
    }
    const handleEdit = (usr,index) => {
        setUser(usr);
        setEditIndex(index);
    }
    const handleAddUser = () => {
        setUsers(prev=>([...prev,user]));
        handleReset();
    }
    const handleUpdateUser = () => {
        setUsers(prev=>prev.map((item,index)=>index===editIndex ? user: item));
        setEditIndex(null);
        handleReset();
    }
    const handleDelete = (usr,i) => {
        setUsers(prev=>prev.filter((item,index)=>index !== i));
    }
    return (
        <div>
            <h1>Welcome to the ReactJS</h1>
            <form>
                <label>Full Name: </label>
                <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                <label>Gender : </label>
                <input type="radio" name="gender" value="male" onChange={handleChange} checked={user.gender === "male"} /> Male
                <input type="radio" name="gender" value="female" onChange={handleChange} checked={user.gender === "female"} /> Female
                <input type="radio" name="gender" value="others" onChange={handleChange} checked={user.gender === "others"} /> Others <br />

                <label>State : </label>
                <select name="state" value={user.state} onChange={handleChange}>
                    <option>--select--</option>
                    <option value={"AP"}>AP</option>
                    <option value={"TS"}>TS</option>
                    <option value={"KA"}>KA</option>
                    <option value={"MH"}>MH</option>
                </select> <br />

                <label>Areas Of Interest : </label>
                <input type="checkbox" name="areasOfInterest" value={"HTML"} onChange={handleChange} checked={user.areasOfInterest.includes("HTML")} /> HTML
                <input type="checkbox" name="areasOfInterest" value={"CSS"} onChange={handleChange} checked={user.areasOfInterest.includes("CSS")} /> CSS
                <input type="checkbox" name="areasOfInterest" value={"JS"} onChange={handleChange} checked={user.areasOfInterest.includes("JS")} /> JS
                <input type="checkbox" name="areasOfInterest" value={"REACT JS"} onChange={handleChange} checked={user.areasOfInterest.includes("REACT JS")} /> REACT JS <br />

                {
                    editIndex === null ? <button type="button" onClick={handleAddUser}>Add User</button> 
                    : <button type="button" onClick={handleUpdateUser}>Update User</button>
                }
            </form> <br /><br />

            <table border={2}>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>Areas Of Interest</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usr,i)=>(
                            <tr key={usr.fname}>
                                <td>{usr.fname}</td>
                                <td>{usr.gender}</td>
                                <td>{usr.state}</td>
                                <td>{usr.areasOfInterest.join(", ")}</td>
                                <td><button type="button" onClick={()=>handleEdit(usr,i)}>Edit</button></td>
                                <td><button type="button" onClick={()=>handleDelete(usr,i)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;