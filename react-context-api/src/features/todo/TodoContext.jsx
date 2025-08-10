import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => setTodos((t) => [...t, { text, done: false }]);
  const toggleTodo = (idx) => setTodos((t) => t.map((todo, i) => i === idx ? { ...todo, done: !todo.done } : todo));
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}
