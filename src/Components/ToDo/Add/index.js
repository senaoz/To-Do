import {useEffect, useState} from "react";

const initialValues = {done:false, name:'', deadline:'None'};


export default function AddToDo({ setToDos, todos }) {
    const [todo, addToDo] = useState(initialValues);

    useEffect( () => {
        addToDo(initialValues);
    }, [ todos ])


    const onChangeInput = (e) => {
        addToDo({...todo, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        setToDos([ ...todos, todo ]);
        console.log(todos);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <input name='name' type="text" required
                       className="customInput"
                       onChange={onChangeInput}
                       placeholder='What needs to be done?'/>

                <input name='deadline' type="date"
                       onChange={onChangeInput}
                       className="customInput"
                       placeholder='Enter a deadline for this to do'/>
            </div>

            <div className="flex justify-end mt-6">
                <button className="button">Add 🚀</button>
            </div>
        </form>
    );
}