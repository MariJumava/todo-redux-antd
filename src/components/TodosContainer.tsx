import { styled } from 'styled-components';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;
const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  color: #fdfeff;
`;

export const TodosContainer = () => {
  return (
    <StyledContainer>
      <StyledTitle>My ToDo List</StyledTitle>
      <AddTodo />
      <TodoList />
    </StyledContainer>
  );
};
