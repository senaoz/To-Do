import React from "react";


export default function List({ todos, updateToDos }) {

    const updateTodoIsComplete = (todoIndex) => {
        updateToDos(
            todos.map((todo, index) =>
                index === todoIndex
                    ? { ...todo, done: !todo.done }
                    : { ...todo }
            )
        );
    };

    const completeAll = (todos) => {
        updateToDos(
            todos.map((todo) => ({done:true, name:todo.name, deadline:todo.deadline }))
        );
    }

    const removeTodoItem = (todoIndex) => {
        todos.splice(todoIndex, 1);
        updateToDos([...todos]);
    };

    return (
        <div className="mt-10">
            <section className='flex justify-between items-end'>
                <h4 className="w-7/12 md:w-9/12">To-Dos</h4>
                <h4 className='text-center w-3/12 md:w-2/12'>Deadline</h4>
                <h4 className="text-center w-2/12 md:w-1/12">Delete</h4>
            </section>

            { todos.map((todo, index) => (
                    <section key={index+1} className='flex justify-between items-center text-white'>
                        <label className="w-7/12 md:w-9/12">
                            <input name="done"
                                   checked={todo.done}
                                   className="checkbox" type="checkbox"
                                   onChange={() => updateTodoIsComplete(index)}
                            />
                            {todo.name}
                        </label>
                        <div className='text-center w-3/12 md:w-2/12'>{todo.deadline}</div>
                        <button
                            className="font-black text-center m-0.5 p-0.5 w-2/12 md:w-1/12"
                            onClick={() => removeTodoItem(index)}
                        >X</button>
                    </section>
                )
            )}
            <button className="button w-full mt-8" onClick={() => completeAll(todos)}>Complete All 🚀</button>
        </div>
    );
}