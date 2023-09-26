import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeTodos, updateTodos, completeTodos } from '../redux/reducerTodo';
import { RootState } from '../redux/store';
import { TodoItem } from './TodoItem';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  list-style: none;
  margin-left: 5%;
`;

export const TodoList = () => {
  const [sort, setSort] = useState('active');
  const todos = useSelector((state: RootState) => state);

  const saveToLocalStorage = (todosLocal: any) => {
    localStorage.setItem('todos', JSON.stringify(todosLocal));
  };

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  return (
    <div>
      <div>
        <button onClick={() => setSort('all')}>All todos</button>
        <button onClick={() => setSort('active')}>Active</button>
        <button onClick={() => setSort('completed')}>Completed</button>
      </div>
      <StyledList>
        {todos.length > 0 && sort === 'active'
          ? todos.map(
              (item: {
                completed: boolean;
                id: number;
                text: string;
                date: string;
              }) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={removeTodos}
                      updateTodo={updateTodos}
                      completeTodo={completeTodos}
                    />
                  )
                );
              },
            )
          : null}
        {todos.length > 0 && sort === 'completed'
          ? todos.map(
              (item: {
                completed: boolean;
                id: number;
                text: string;
                date: string;
              }) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={removeTodos}
                      updateTodo={updateTodos}
                      completeTodo={completeTodos}
                    />
                  )
                );
              },
            )
          : null}
        {todos.length > 0 && sort === 'all'
          ? todos.map(
              (item: {
                completed: boolean;
                id: number;
                text: string;
                date: string;
              }) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={removeTodos}
                    updateTodo={updateTodos}
                    completeTodo={completeTodos}
                  />
                );
              },
            )
          : null}
      </StyledList>
    </div>
  );
};
