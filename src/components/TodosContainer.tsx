import { styled } from 'styled-components';
import { Row, Col, Card } from 'antd';
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
      <Row justify="center" align="middle" gutter={[0, 20]}>
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <StyledTitle>My ToDo List</StyledTitle>
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Create a new todo">
            <AddTodo />
          </Card>
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Todo List">
            <TodoList />
          </Card>
        </Col>
      </Row>
    </StyledContainer>
  );
};
