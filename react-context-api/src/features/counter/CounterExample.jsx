import React from 'react';
import { useCounter } from './CounterContext';

export default function CounterExample() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h2>Counter Example</h2>
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0 1rem' }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
