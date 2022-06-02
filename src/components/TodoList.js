import React from "react"
import Todo from "./Todo.js"

export default function TodoList({todos, setTodos, filteredTodos}){
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    
                    <Todo 
                    key={todo.id} 
                    todo={todo} 
                    setTodos={setTodos} 
                    todos={todos}/>
                ))}
            </ul>
        </div>
    );
}