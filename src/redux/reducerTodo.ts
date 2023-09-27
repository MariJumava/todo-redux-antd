import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ITodo {
  id: number;
  text: string;
  completed?: boolean;
  date: string;
}

const savedTodos = localStorage.getItem('todos');
const initialState = savedTodos ? JSON.parse(savedTodos) : ([] as ITodo[]);

const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        state.push(action.payload);
      },
      prepare: (text: string) => ({
        payload: {
          id: Math.floor(Math.random() * 1000),
          text,
          completed: false,
          date: new Date().toISOString(),
        } as ITodo,
      }),
    },
    removeTodos: (state, action: PayloadAction<number>) => {
      return state.filter((item: { id: number }) => item.id !== action.payload);
    },
    updateTodos: (
      state,
      action: PayloadAction<{ text: string; id: number }>,
    ) => {
      return state.map((todo: { id: number }) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
    },
    completeTodos: (
      state,
      action: PayloadAction<{ completed: boolean; id: number }>,
    ) => {
      return state.map((todo: { id: number }) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: action.payload.completed,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  todoReducer.actions;
export const reducer = todoReducer.reducer;
