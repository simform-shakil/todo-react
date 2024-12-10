import React from 'react';
import { Todo } from '../models/todo';
import './styles.css';
import TodoSingle from './TodoSingle';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((t) => (
        <TodoSingle todo={t} todos={todos} setTodos={setTodos} key={t.id} />
      ))}
    </div>
  );
};

export default TodoList;
