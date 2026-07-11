import { useDispatch, useSelector } from "react-redux";
import { handleCreateUsersDataAsync, handleDeleteUsersDataAsync, handleGetUsersDataAsync, handleUpdateUsersDataAsync } from "../store/action";
import { useEffect, useState } from "react";

const Users = () => {
    const initialUser = {
        fname: "",
        gender: "",
        state: "",
        areasOfInterest: ""
    }
    const [user, setUser] = useState(initialUser);
    const [isEdit, setIsEdit] = useState(null);

    const users = useSelector((state) => {
        return state.users;
    })
    const dispatch = useDispatch();

    const handleDeleteUser = (user) => {
        dispatch(handleDeleteUsersDataAsync(user))
    }
    function getUsersDataFromServer() {
        dispatch(handleGetUsersDataAsync());
    }

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "areasOfInterest") {
            setUser(prev => ({
                ...prev,
                areasOfInterest: checked ? [...prev.areasOfInterest, value] : prev.areasOfInterest.filter((item) => item !== value)
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
        dispatch(handleCreateUsersDataAsync(user));
        handleReset();
    }
    const handleEditUser = (user) => {
        setUser(user);
        setIsEdit(user.id);
    }
    const handleUpdateUser = () => {
        dispatch(handleUpdateUsersDataAsync(user));
        handleReset();
        setIsEdit(null);
    } 
    useEffect(() => {
        getUsersDataFromServer();
    }, []);
    return (
        <div>
            <h1>welcome to users component.</h1>

            <form action="">
                <label htmlFor="fname">FullName : </label>
                <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                <label htmlFor="gender">Gender : </label>
                <input type="radio" name="gender" value={"male"} onChange={handleChange} checked={user.gender === "male"} /> Male
                <input type="radio" name="gender" value={"female"} onChange={handleChange} checked={user.gender === "female"} /> Female
                <input type="radio" name="gender" value={"others"} onChange={handleChange} checked={user.gender === "others"} /> Others <br />

                <label htmlFor="state">State : </label>
                <select name="state" value={user.state} onChange={handleChange}>
                    <option value="">--select--</option>
                    <option value="MH">MH</option>
                    <option value="KA">KA</option>
                    <option value="AP">AP</option>
                    <option value="TS">TS</option>
                </select> <br />

                <label htmlFor="areasOfInterest">Areas Of Interest : </label>
                <input type="checkbox" name="areasOfInterest" value={"HTML"} onChange={handleChange} checked={user.areasOfInterest.includes("HTML")} /> HTML
                <input type="checkbox" name="areasOfInterest" value={"CSS"} onChange={handleChange} checked={user.areasOfInterest.includes("CSS")} /> CSS
                <input type="checkbox" name="areasOfInterest" value={"JS"} onChange={handleChange} checked={user.areasOfInterest.includes("JS")} /> JS
                <input type="checkbox" name="areasOfInterest" value={"REACT JS"} onChange={handleChange} checked={user.areasOfInterest.includes("REACT JS")} /> REACT JS <br />

                {
                    isEdit === null ? <button type="button" onClick={handleAddUser}>Add</button> : <button type="button" onClick={handleUpdateUser}>Update</button>
                }
            </form>

            <table border={2}>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>Areas Of Interest</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usr, index) => {
                            return (
                                <tr key={usr.id}>
                                    <td>{usr.fname}</td>
                                    <td>{usr.gender}</td>
                                    <td>{usr.state}</td>
                                    <td>{usr.areasOfInterest.join(", ")}</td>
                                    <td>
                                        <button type="button" onClick={() => handleEditUser(usr)}>edit</button>
                                        <button type="button" onClick={() => handleDeleteUser(usr)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Users;