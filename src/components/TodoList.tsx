import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { List, Button, Radio } from 'antd';
import {
  removeTodos,
  updateTodos,
  completeTodos,
  ITodo,
} from '../redux/reducerTodo';
import { RootState } from '../redux/store';
import { TodoItem } from './TodoItem';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  list-style: none;
`;

export const TodoList = () => {
  const [sort, setSort] = useState('all');
  const todos = useSelector((state: RootState) => state);

  const saveToLocalStorage = (todosLocal: ITodo) => {
    localStorage.setItem('todos', JSON.stringify(todosLocal));
  };

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  return (
    <StyledList>
      <Radio.Group value={'default'}>
        <Radio.Button onClick={() => setSort('all')}>All ToDos</Radio.Button>
        <Radio.Button onClick={() => setSort('active')}>Active</Radio.Button>
        <Radio.Button onClick={() => setSort('completed')}>
          Completed
        </Radio.Button>
      </Radio.Group>
      {todos.length > 0 && sort === 'active' ? (
        <List
          dataSource={todos}
          style={{ width: '100%' }}
          renderItem={(todo: {
            id: number;
            text: string;
            completed: boolean;
            date: string;
          }) => {
            return (
              todo.completed === false && (
                <TodoItem
                  item={todo}
                  removeTodo={removeTodos}
                  updateTodo={updateTodos}
                  completeTodo={completeTodos}
                />
              )
            );
          }}
          pagination={{
            position: 'bottom',
            pageSize: 10,
          }}
        />
      ) : null}
      {todos.length > 0 && sort === 'completed' ? (
        <List
          dataSource={todos}
          style={{ width: '100%' }}
          renderItem={(todo: {
            id: number;
            text: string;
            completed: boolean;
            date: string;
          }) => {
            return (
              todo.completed === true && (
                <TodoItem
                  item={todo}
                  removeTodo={removeTodos}
                  updateTodo={updateTodos}
                  completeTodo={completeTodos}
                />
              )
            );
          }}
          pagination={{
            position: 'bottom',
            pageSize: 10,
          }}
        />
      ) : null}
      {todos.length > 0 && sort === 'all' ? (
        <List
          dataSource={todos}
          style={{ width: '100%' }}
          renderItem={(todo: {
            id: number;
            text: string;
            completed: boolean;
            date: string;
          }) => {
            return (
              <TodoItem
                item={todo}
                removeTodo={removeTodos}
                updateTodo={updateTodos}
                completeTodo={completeTodos}
              />
            );
          }}
          pagination={{
            position: 'bottom',
            pageSize: 10,
          }}
        />
      ) : null}
    </StyledList>
  );
};
