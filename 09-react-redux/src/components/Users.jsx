import { useSelector, useDispatch } from 'react-redux';
import { handleAddUserAction, handleDeleteUserAction, handleUpdateUserAction } from '../store/action';
import { useState } from 'react';

const Users = () => {
    const initialUser = {
        id: "",
        fname: "",
        lname: ""
    }
    const [user, setUser] = useState(initialUser);
    const [isEdit,setIsEdit] = useState(null);

    const users = useSelector((state) => {
        return state.users;
    });
    const dispatch = useDispatch();

    function generateId() {
        return Math.floor(Math.random() * 100000);
    }
    const handleReset = () => {
        setUser(initialUser);
    }
    const handleAdd = () => {
        const newUser = {
            ...user,
            id: generateId()
        };
        dispatch(handleAddUserAction(newUser));
        handleReset();
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleEdit = (user) => {
        setIsEdit(user.id);
        setUser(user)
    }
    const handleDelete = (user) => {
        dispatch(handleDeleteUserAction(user));
    }
    const handleUpdate = () => {
        dispatch(handleUpdateUserAction(user));
        setIsEdit(null);
        handleReset();
    }
    return (
        <div>
            <h1>Welcome to users page.</h1>
            <form>
                <label htmlFor="fname">First Name : </label>
                <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                <label htmlFor="lname">Last Name : </label>
                <input type="text" name="lname" value={user.lname} onChange={handleChange} /> <br />

                {
                    isEdit === null ? <button type='button' onClick={handleAdd}>Add</button> 
                    : <button type='button' onClick={handleUpdate}>Update</button>
                }
            </form>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usr) => {
                            return (
                                <tr key={usr.id}>
                                    <td>{usr.id}</td>
                                    <td>{usr.fname}</td>
                                    <td>{usr.lname}</td>
                                    <td>
                                        <button type="button" onClick={()=>handleDelete(usr)}>delete</button>
                                        <button type="button" onClick={()=>handleEdit(usr)}>edit</button>
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