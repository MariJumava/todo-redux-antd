import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

export const TodoItem = (props: {
  item: {
    id: number;
    completed: boolean;
    text: string;
  };
  removeTodo: ActionCreatorWithPayload<number, 'todos/removeTodos'>;
}) => {
  const { item, removeTodo } = props;

  const dispatch = useDispatch<AppDispatch>();
  return (
    <li key={item.id}>
      <span>{item.text}</span>
      <button
        onClick={() => {
          dispatch(removeTodo(item.id));
        }}
        style={{ color: 'red', width: '20px', height: '20px' }}
      >
        -
      </button>
    </li>
  );
};
