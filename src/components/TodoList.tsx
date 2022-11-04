import { useState } from "react";
import  './todoList.css'

// Other Imports
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/todoSlice";

export default function TodoList() {
   
    //React Hooks
    const [todoDescription, setTodoDescription] = useState("");

    //React Redux Hooks
    const dispatch = useDispatch<AppDispatch>();
    const dataTestId = "test-id";
    return (
        <div>
            <h1 className='title'>todos</h1>
            <div className='addItem'>
                <input
                    className='addItem__input'
                    placeholder='What needs to be done?'
                    onChange={(e) => setTodoDescription(e.target.value)}
                    value={todoDescription}
                    data-testid={dataTestId}
                />
                <button
                    className='addItem__btn'
                    onClick={() => {
                    dispatch(addTodo(todoDescription));
                    setTodoDescription("");
                    }}
                >➕
                </button>
            </div>
        </div>
    )
}