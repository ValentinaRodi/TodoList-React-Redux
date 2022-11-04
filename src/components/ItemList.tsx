import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setTodoStatus } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";
import "./itemList.css";

export default function ItemList() {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      {todoList.map((todo) => {
        if (todo.itemShow === 2 || todo.itemShow === todo.counter) {
          return (
            <div className="item" key={uuidv4()}>
              <button
                className={todo.styleBtn}
                onClick={() => {
                  dispatch(setTodoStatus({ id: todo.id }));
                }}
              >
                <span>
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="15px"
                    height="15px"
                  >
                    <path d="M27 55L6 33 9 29 26 41 55 12 59 16z" />
                  </svg>
                </span>
              </button>
              <p className={todo.styleText}>{todo.description}</p>
              <button
                className="item__btn_del"
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                ╳
              </button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
