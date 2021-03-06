import {useState} from "react";
import AddToDo from "./Add";
import List from "./List";


export default function ToDo() {

    const [todos, setToDos] = useState([
        {done: true, name: "Start learning react", deadline: "2022-03-18"},
        {done: false, name: "Go to grocery store", deadline: "2022-04-18"},
        {done: false, name: "Walking with your dog", deadline: " "}
    ]);

    return (
        <>
            <AddToDo todos={todos} setToDos={setToDos}/>
            <List todos={todos} updateToDos={setToDos}/>
        </>
    );
}