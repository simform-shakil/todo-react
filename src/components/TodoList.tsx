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
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active tasks</span>
        {todos.map((todo) => (
          <TodoSingle
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>

      <div className="todos remove">
        <span className="todos__heading">Completed tasks</span>
        {todos.map((todo) => (
          <TodoSingle
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
