import Login from "./Login";

function withAuth(WrapperComponent){
    return function AuthComponent(props){
        console.log("HOC Props:", props);
        if(!props.isLoggedIn){
            return <Login/>
        }
        return <WrapperComponent {...props} />
    }
}

export default withAuth;