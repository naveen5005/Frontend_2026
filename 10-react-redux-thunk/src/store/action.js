import axios from 'axios';

const handleUsersData = (dispatch) => {
    axios.get("http://localhost:3000/users").then(({ data }) => {
        dispatch({
            type: "GET_USERS",
            payload: data
        })
    })
}
export const handleGetUsersDataAsync = () => {
    return (dispatch) => {
        handleUsersData(dispatch)
    }
}
export const handleCreateUsersDataAsync = (user) => {
    return (dispatch) => {
        axios.post("http://localhost:3000/users/", user).then(() => {
            handleUsersData(dispatch)
        })
    }
}
export const handleDeleteUsersDataAsync = (user) => {
    return (dispatch) => {
        axios.delete("http://localhost:3000/users/" + user.id).then(() => {
            handleUsersData(dispatch)
        })
    }
}
export const handleUpdateUsersDataAsync = (user) => {
    return (dispatch) => {
        axios.put("http://localhost:3000/users/" + user.id, user).then(() => {
            handleUsersData(dispatch)
        })
    }
}