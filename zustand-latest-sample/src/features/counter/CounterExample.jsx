import React from 'react';
import useCounterStore from '../../store/counterStore';

export default function CounterExample() {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => incrementBy(5)}>Increment by 5</button>
      </div>
      <p style={{ margin: 0 }}>Zustand count is {count}</p>
    </div>
  );
}

function incrementBy(amount) {
  const { increment } = useCounterStore.getState();
  for (let i = 0; i < amount; i++) increment();
}
