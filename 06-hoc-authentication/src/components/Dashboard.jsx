const Dashboard = (props) => {
    console.log(props)
    return(
        <div>
            <h4>Welcome to Dashboard page.</h4>
            <p>Name : {props.name}</p>
            <p>age : {props.age}</p>
        </div>
    )
}

export default Dashboard;