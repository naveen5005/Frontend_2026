export const handleAddUserAction = (user) => {
    return {
        type: "ADD_USERS",
        payload: user
    }
}
export const handleDeleteUserAction = (user) => {
    return {
        type: "DELETE_USERS",
        payload: user
    }
}
export const handleUpdateUserAction = (user) => {
    return {
        type: "UPDATE_USERS",
        payload: user
    }
}