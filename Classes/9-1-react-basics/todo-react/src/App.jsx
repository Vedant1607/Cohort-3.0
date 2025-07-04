import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "hit the gym regularly",
      done: true,
    },
  ]);

  function addTodo() {
    let newArray = [...todos];
    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: true,
    });
    setTodos(newArray);
  }

  return (
    <div>
      <input id="title" type="text" placeholder="Title"></input>
      <input id="description" type="text" placeholder="Description"></input>
      <br />
      <button onClick={addTodo}>Add a todo</button>
      <br />
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} done={todo.done}></Todo>
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h1>{props.done ? "Task is done":"Task is not done"}</h1>
    </div>
  )
}

export default App;
