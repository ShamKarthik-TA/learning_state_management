import React, { useState } from 'react';
import { useTodo } from './TodoContext';

export default function TodoExample() {
  const { todos, addTodo, toggleTodo } = useTodo();
  const [input, setInput] = useState('');
  return (
    <div>
      <h2>Todo Example</h2>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => { addTodo(input); setInput(''); }}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i} onClick={() => toggleTodo(i)} style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
