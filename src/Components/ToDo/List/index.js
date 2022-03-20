import {useState} from "react";




export default function List({ todos }) {

    const done = todos.filter(item => item.done === true);
    const undone = todos.filter(item => item.done === false);

    return (
        <div className="mt-10">
            <section className='flex justify-between items-end'>
                <h4>To-Dos</h4>
                <h4>Deadline</h4>
            </section>

            {
                todos.map((todo, index) => (
                    <section key={index+1} className='flex justify-between'>
                        <label>
                            <input name="done"
                                defaultChecked={todo.done}
                                className="checkbox" type="checkbox" />
                            {todo.name}
                        </label>
                        <div className='text-right'>{todo.deadline}</div>
                    </section>
                ))
            }
        </div>
    );
}