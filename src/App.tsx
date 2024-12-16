import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models/todo';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    let add;
    if (source.droppableId === 'todosList') {
      console.log('in first Todo');
      add = todos.splice(source.index, 1)[0];
    } else {
      console.log('in first else');
      add = completedTodos.splice(source.index, 1)[0];
    }

    if (destination.droppableId === 'todosList') {
      console.log('in first else');
      todos.splice(destination.index, 0, add);
    } else {
      completedTodos.splice(destination.index, 0, add);
    }

    setTodos(todos);
    setCompletedTodos(completedTodos);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">TO DO App</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
