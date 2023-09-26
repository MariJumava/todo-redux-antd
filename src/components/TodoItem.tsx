import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useRef, useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

export const TodoItem = (props: {
  item: {
    id: number;
    completed: boolean;
    text: string;
    date: string;
  };
  removeTodo: ActionCreatorWithPayload<number, 'todos/removeTodos'>;
  updateTodo: ActionCreatorWithPayload<any, 'todos/updateTodos'>;
  completeTodo: ActionCreatorWithPayload<
    {
      completed: boolean;
      id: number;
    },
    'todos/completeTodos'
  >;
}) => {
  const { item, removeTodo, updateTodo, completeTodo } = props;

  const dispatch = useDispatch<AppDispatch>();
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const changeFocus = () => {
    setDisabled(false);
    inputRef.current?.focus();
  };

  const update = (
    id: number,
    text: string | undefined,
    e: KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (e.key === 'Enter') {
      dispatch(updateTodo({ id, text }));
      setDisabled(true);
    }
  };

  return (
    <li key={item.id}>
      <span>{item.text}</span>
      <span>{item.date.split('').slice(0, 10).join('')}</span>
      <textarea
        ref={inputRef}
        disabled={disabled}
        defaultValue={item.text}
        onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) =>
          update(item.id, inputRef.current?.value, e)
        }
      />
      <button onClick={() => changeFocus()}>change</button>
      {item.completed === false && (
        <button
          onClick={() => {
            dispatch(completeTodo({ completed: !item.completed, id: item.id }));
          }}
          style={{ color: 'green' }}
        >
          0
        </button>
      )}
      <button
        onClick={() => {
          dispatch(removeTodo(item.id));
        }}
        style={{ color: 'red', width: '20px', height: '20px' }}
      >
        X
      </button>
      {item.completed && <div>done</div>}
    </li>
  );
};
