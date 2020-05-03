import React from 'react';
import './App.css';
import TodoList from "./ToDo/TodoList";

export default function App(){
  let todos = [
    {id:1, completed:false, title: 'Learn JS'},
    {id:1, completed:false, title: 'Learn CSS'},
    {id:1, completed:false, title: 'Learn React'}
  ]

  function toggleTodo(id){
      todos = todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
  }

  return (
    <div className="App">
      <h1>ToDO list</h1>
      <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
    </div>
  )
};



