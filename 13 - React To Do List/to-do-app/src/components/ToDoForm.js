import React, { useState } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 100000),
    //   text: input,
    // });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        className="todo-input"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default ToDoForm;
