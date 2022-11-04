import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state: any[], action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          styleBtn: "item__btn",
          styleText: "item__text",
          counter: 1,
          itemShow: 2,
        } as Todo,
      }),
    },
    removeTodo(state: any[], action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state: any[],
      action: PayloadAction<{ id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].styleBtn = "item__btn_check";
      state[index].styleText = "item__text_check";
      state[index].counter = 0;
    },
    showItemActive(state: any[], action: PayloadAction<{ todoItemShow: number }>) {
      state.map((item)=>item.itemShow = action.payload.todoItemShow)
    },
    removeTodoAll() {
      return initialState
    },
    
  },
});

export const { addTodo, removeTodo, setTodoStatus, showItemActive, removeTodoAll } = todoSlice.actions;
export default todoSlice.reducer;


