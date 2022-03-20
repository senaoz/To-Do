import {useState} from "react";
import AddToDo from "./Add";
import List from "./List";


export default function ToDo() {

    const [todos, setToDos] = useState([
        {done: true, name: "Start learning react", deadline: "2022-03-18"},
        {done: false, name: "Deneme", deadline: "2022-04-18"}
    ]);

    return (
        <>
            <AddToDo setToDos={setToDos} todos={todos}/>
            <List todos={todos}/>
        </>
    );
}