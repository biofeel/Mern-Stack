import React, { useState } from 'react';
import './App.css';
import Todo from './component/Todo';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewToDoSubmit = (newEvent) => {
    newEvent.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");

  };

  const handleToDoDelete = (deleteIndex) => {
    const filertedTodos = todos.filter((todo, i) => {
      return i !== deleteIndex
    });

    setTodos(filertedTodos);

  }

  const handleCheckBoxOnOff = (index) => {
    const updatedToDos = todos.map((todo, i) => {
      if (index === i) {
        todo.complete = !todo.complete;
      }

      return todo;
    });

    setTodos(updatedToDos);

  }

  return (
    <div className="App">

      <h1>Add an Event</h1>

      <form
        onSubmit={(newEvent) => {
          handleNewToDoSubmit(newEvent);
        }}>

        <input
          onChange={(newEvent) => {
            setNewTodo(newEvent.target.value);
          }}
          type="text"
          value={newTodo} />

        <div>
          <button>Add Event</button>
        </div>

      </form>

      <hr />
      <hr />

      <h1>Your Todo List</h1>
      {todos.map((todo, i) => {
        
        return (
        <Todo 
        key={i} 
        todo={todo} 
        handleCheckBoxOnOff = {handleCheckBoxOnOff}
        handleToDoDelete = {handleToDoDelete}
        i={i}
        />
        );
      })}

    </div>
  );
}

export default App;
