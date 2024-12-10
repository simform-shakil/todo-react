import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action=""
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        className="input_box"
        placeholder="Enter a Task"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit" className="input_submit">
        ADD
      </button>
    </form>
  );
};

export default InputField;
