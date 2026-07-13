import { useState } from "react";

const ToDo = () => {
    const initialList = {
        list: ""
    };
    const [listItem,setListItem] = useState(initialList);
    const [lists,setLists] = useState([]);
    const [filter,setFilter] = useState("");


    const handleReset = () => {
        setListItem(initialList)
    }
    const handleChange = (e) => {
        const {name,value} = e.target;

        setListItem(prev => ({
            ...prev,
            [name] : value
        }))
    }
    const handleAddList = () => {
        setLists(prev =>[...prev, {
            ...listItem,
            isCompleted: false
        }]);
        handleReset();
    }
    const handleDeleteList = (item) => {
        setLists(prev => prev.filter((data) => data.list !==item.list ));
    }
    const handleCompleteList = (item) => {
        setLists(prev=>prev.map(data => data.list === item.list ? {...data,isCompleted: true} : data))
    }
    const filteredLists = lists.filter((data)=>{
         if (filter === "completed") {
            return data.isCompleted === true;
        }

        if (filter === "uncompleted") {
            return data.isCompleted === false;
        }

        return true; // "all"
    })
    return (
        <div>
            <h1>Welcome to TO DO Lists</h1>

            <input type="text" name="list" value={listItem.list} onChange={handleChange} />
            <button type="button" onClick={handleAddList}>Add</button> <br />

            <button type="button" onClick={()=>setFilter("all")}>All</button>
            <button type="button" onClick={()=>setFilter("completed")}>completed</button>
            <button type="button" onClick={()=>setFilter("uncompleted")}>uncompleted</button>
            {
                filteredLists.map((item, index) => {
                    return(
                        <li key={index} style={item.isCompleted ? {textDecorationLine :"line-through"} : {}}>{item.list}
                            <button type="button" onClick={()=>handleDeleteList(item)}>delete</button>
                            {
                                !item.isCompleted && <button type="button" onClick={()=>handleCompleteList(item)}>complete</button>
                            }
                        </li>
                    )
                })
            }
        </div>
    );
};

export default ToDo;