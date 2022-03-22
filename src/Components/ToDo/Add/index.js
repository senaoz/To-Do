import {useEffect, useState} from "react";

const initialValues = {done:false, name:'', deadline:''};


export default function AddToDo({ setToDos, todos }) {
    const [ todo, addToDo ] = useState(initialValues);

    useEffect( () => {
        addToDo(initialValues);
        console.log(todos);
    }, [ todos ])

    const onChangeInput = (e) => {
        addToDo({...todo, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setToDos([ ...todos, todo ]);
    }

    return (
        <form onSubmit={onSubmit} className="todo-form">
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <input name='name'
                       value={todo.name}
                       type="text" required
                       className="customInput"
                       onChange={onChangeInput}
                       placeholder='What needs to be done?'
                       autoFocus
                />

                <input name='deadline' type="date"
                       onChange={onChangeInput}
                       value={todo.deadline}
                       className="customInput"
                       placeholder='Enter a deadline for this to do'/>
            </div>

            <div className="flex justify-end mt-6">
                <button className="button" type='submit'>Add</button>
            </div>
        </form>
    );
}