import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { removeTodoAll, showItemActive } from "../redux/todoSlice";
import  './infoList.css'

export default function InfoList() {
   
    const todoList = useSelector((state: RootState) => state);
    const currentCounter = todoList.map(item => item.counter).reduce((sum, current) => sum + current, 0);
    const dispatch = useDispatch<AppDispatch>();

    //React Hooks
    const [todoItemShow, setTodoItemShow] = useState(2);
    const [todoButtonClass, setTodoButtonAllClass] = useState(['info__btn', 'info__btn', 'info__btn_check']);

    function handleChangeButtonClass() {
        const buttonTodoItem = document.querySelector<HTMLElement>('.info-item__button')! 
        buttonTodoItem.addEventListener('click', (event) => {
            const idItem = +(event.target as HTMLElement).id
            for (let index = 0; index < todoButtonClass.length; index++) {
                (index === idItem) ? todoButtonClass[index] = 'info__btn_check' : todoButtonClass[index] = 'info__btn'
            }
            setTodoButtonAllClass(todoButtonClass)     
        });
    }

    function handleClickChangeItemShow() {
        const buttonTodoItem = document.querySelector('.info-item__button')!
        buttonTodoItem.addEventListener('click', (event) => {
            const idItem = +(event.target as HTMLElement).id
            setTodoItemShow(idItem);
        }) 
    }

    function handleClickChangeItemList() {
        handleChangeButtonClass()
        handleClickChangeItemShow()
        dispatch(showItemActive({ todoItemShow: todoItemShow }));
    }
  
    //для отслеживания изменений todoItemShow
    useEffect(() => {
        handleClickChangeItemList();
    }, [todoItemShow])  

    return (
        <div>
            <div className='info-item'>
                <p className='iifo-item__counter'>{currentCounter} item left</p>
                <div className='info-item__button'>
                    <button
                        className={todoButtonClass[2]}
                        id="2"
                        onClick={handleClickChangeItemList}
                    >all
                    </button>
                    <button
                        className={todoButtonClass[1]}
                        id="1"
                        onClick={handleClickChangeItemList}
                    >active
                    </button>
                    <button
                        className={todoButtonClass[0]}
                        id="0"
                        onClick={handleClickChangeItemList}
                    >completed
                    </button>
                </div>
                <button
                    className='info__btn_clear'
                    onClick={() => {
                        dispatch(removeTodoAll())
                    }}
                >Clear completed
                </button>
            </div>
        </div>
    )
}