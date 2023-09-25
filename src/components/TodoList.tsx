import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
  return (
    <StyledList>
      {todos.map((item: any) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </StyledList>
  );
};
