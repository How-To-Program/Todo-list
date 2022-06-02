import React, { useState, useEffect } from "react"
import './App.css';
import From from "./components/Form.js"
import TodoList from './components/TodoList';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  const [status, setStatus] = useState(["all"]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Yuntao's TodoList</h1>
      </header>
      <From 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}
