import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../models/todo';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import './styles.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoSingle = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, todo: editTodo } : t
    );

    setTodos(updatedTodos);
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      action=""
      className="todos_single"
      onSubmit={(e) => {
        handleEdit(e, todo.id);
      }}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos_single--text">{todo.todo}</s>
      ) : (
        <span className="todos_single--text">{todo.todo}</span>
      )}

      <span
        className="icon"
        onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(true);
          }
        }}
      >
        <CiEdit />
      </span>
      <span
        className="icon"
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        <MdDeleteForever />
      </span>
      <span
        className="icon"
        onClick={() => {
          handleDone(todo.id);
        }}
      >
        <IoCheckmarkDoneSharp />
      </span>
    </form>
  );
};

export default TodoSingle;
