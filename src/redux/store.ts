import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducerTodo';

export const store = configureStore({
  reducer: reducer,
});

store.subscribe(() => {
  const todos = store.getState().todos;
  localStorage.setItem('todos', JSON.stringify(todos));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
