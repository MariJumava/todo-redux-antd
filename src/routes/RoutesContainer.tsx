import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodosContainer } from '../components/TodosContainer';

export const RoutesContainer = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TodosContainer />} />
    </Routes>
  </Router>
);
