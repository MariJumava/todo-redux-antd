import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../redux/reducerTodo';
import { AppDispatch } from '../redux/store';

export const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <input
        type="text"
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setTodo(e.target.value)
        }
        value={todo}
      />
      <button
        onClick={() => {
          dispatch(addTodos(todo));
          setTodo('');
        }}
      >
        +
      </button>
    </div>
  );
};
