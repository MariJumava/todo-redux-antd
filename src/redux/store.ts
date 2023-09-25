import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducerTodo';

export const store = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
