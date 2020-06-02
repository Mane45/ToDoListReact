import React from "react";
import "./App.css";
import TodoList from "./ToDo/TodoList";

export default function App() {
  const todos = [
    { id: 1, completed: false, title: "Learn JS" },
    { id: 1, completed: false, title: "Learn CSS" },
    { id: 1, completed: false, title: "Learn React" },
  ];

  return (
    <div className="App">
      <h1>ToDO t</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}
