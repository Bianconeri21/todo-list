import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodosType = {
  text: string;
  id: number;
  isCompleted: boolean;
};

interface TodoSliceState {
  todos: TodosType[];
}

const initialState: TodoSliceState = {
  todos: [
    { id: 1, text: "Practice in React", isCompleted: false },
    { id: 2, text: "Feed the cats", isCompleted: false },
    { id: 3, text: "Enjoy good football matches", isCompleted: false },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodosType>) => {
      state.todos = [...state.todos, action.payload];
    },

    setIsCompleted: (state, action: PayloadAction<number>) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }

        return state.todos;
      });
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, setIsCompleted } = todoSlice.actions;

export default todoSlice.reducer;
