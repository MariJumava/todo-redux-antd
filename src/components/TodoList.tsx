import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeTodos, updateTodos } from '../redux/reducerTodo';
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
  const todos = useSelector((state: RootState) => state);

  const saveToLocalStorage = (todosLocal: any) => {
    localStorage.setItem('todos', JSON.stringify(todosLocal));
  };

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  return (
    <StyledList>
      {todos.map((item: any) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            updateTodo={updateTodos}
            removeTodo={removeTodos}
          />
        );
      })}
    </StyledList>
  );
};
