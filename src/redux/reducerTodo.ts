import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ITodo {
  id?: number;
  text: string;
  completed?: boolean;
}

const initialState = [] as ITodo[];

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
        } as ITodo,
      }),
    },
  },
});

export const { addTodos } = todoReducer.actions;
export const reducer = todoReducer.reducer;
