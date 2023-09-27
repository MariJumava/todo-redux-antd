import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {
  TimePicker,
  Tag,
  List,
  Button,
  Popconfirm,
  Switch,
  Input,
  message,
} from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { AppDispatch } from '../redux/store';

const StyledItem = styled.div`
  margin: 2rem 0;
`;
const StyledInfo = styled.div`
  max-width: 65%;
`;

const { TextArea } = Input;

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
  const [showTextarea, setShowTextarea] = useState(false);
  const [todoText, setTodoText] = useState(item.text);

  const deleteTodo = () => {
    dispatch(removeTodo(item.id));
    message.warning('ToDo removed');
  };

  const onTodoToggle = () => {
    dispatch(completeTodo({ completed: !item.completed, id: item.id }));
    message.info('Todo state updated!');
  };

  const update = (id: number, text: string) => {
    dispatch(updateTodo({ id, text }));
    message.info('ToDo updated');
    setShowTextarea(false);
  };

  return (
    <StyledItem>
      <List.Item
        actions={[
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle()}
            defaultChecked={item.completed}
          />,
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => deleteTodo()}
          >
            <Button type="primary" danger>
              X
            </Button>
          </Popconfirm>,
        ]}
        key={item.id}
      >
        <StyledInfo>
          <div>
            <TimePicker
              defaultValue={dayjs(item.date)}
              disabled
              style={{ margin: '10px 15px 15px 0' }}
            />
            <Button type="primary" ghost onClick={() => setShowTextarea(true)}>
              change
            </Button>
          </div>
          <Tag
            color={item.completed ? 'cyan' : 'red'}
            style={{
              fontSize: '20px',
              padding: '10px',
              maxWidth: '100%',
              whiteSpace: 'normal',
            }}
          >
            {item.text}
          </Tag>
          {showTextarea && (
            <>
              <TextArea
                rows={2}
                style={{ margin: '20px 0' }}
                defaultValue={item.text}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              />
              <Button
                type="primary"
                ghost
                onClick={() => update(item.id, todoText)}
              >
                save
              </Button>
            </>
          )}
        </StyledInfo>
      </List.Item>
    </StyledItem>
  );
};
