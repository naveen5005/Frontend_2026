const initialState = {
    users: [],
    products: [],
    carts: []
}

export const rootReducer = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_USERS":
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        case "DELETE_USERS":
            return {
                ...state,
                users: state.users.filter((usr)=>usr.id !== action.payload.id)
            }
        case "UPDATE_USERS":
            return {
                ...state,
                users: state.users.map((user)=>{
                    if(user.id === action.payload.id){
                        return action.payload
                    }
                    return user;
                })
            }
        default:
            return state;
    }
}