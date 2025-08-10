import React, { useState } from 'react';
import useTodoStore from '../../store/todoStore';

export default function TodoExample() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <div>
      <h2>Todo List Example (Zustand)</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add todo"
        style={{ marginRight: 8 }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 16 }}>
        {todos.map((todo, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span
              onClick={() => toggleTodo(i)}
              style={{ cursor: 'pointer', textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(i)} style={{ fontSize: 10, padding: '2px 6px' }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
