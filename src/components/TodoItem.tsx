import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

export const TodoItem = (props: {
  item: {
    id: number;
    completed: boolean;
    text: string;
  };
}) => {
  const { item } = props;

  const dispatch = useDispatch<AppDispatch>();
  return <li key={item.id}>{item.text}</li>;
};
