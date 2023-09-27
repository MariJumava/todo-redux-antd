import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Row, Col, Button, Input, message } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { addTodos } from '../redux/reducerTodo';
import { AppDispatch } from '../redux/store';

export const AddTodo = () => {
  const [form] = Form.useForm();
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const addTodo = (text: string) => {
    dispatch(addTodos(text));
    message.success('Todo added 🙂');
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={() => addTodo(todo)} layout="horizontal">
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name={'name'}
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input
              placeholder="What needs to be done?"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setTodo(e.target.value)}
              value={todo}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <PlusCircleFilled />
            Add ToDo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
