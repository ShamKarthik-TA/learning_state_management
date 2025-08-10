import React from 'react';

// Dummy Zustand store for demonstration
const useDummyStore = (selector) => selector({ animals: ['cat'] });

// Example: Zustand - multiple store instances

// TECHNOLOGY-BASED CON: Zustand's "stale closure" issue
// If you use a callback that closes over state, it may not get the latest value
export function ZustandStaleClosureProblem() {
  // Simulate a Zustand store with a counter and an increment function
  const [count, setCount] = React.useState(0);
  // This callback closes over the initial value of count
  const increment = React.useCallback(() => {
    setTimeout(() => {
      // This will use the value of count at the time increment was created
      setCount(count + 1);
    }, 500);
  }, [count]);
  const renderCount = React.useRef(0);
  renderCount.current++;
  return (
    <div style={{ border: '2px solid orange', margin: 8, padding: 8, borderRadius: 8 }}>
      <h4>Zustand: Stale Closure Problem Example</h4>
      <p>Render count: <b>{renderCount.current}</b></p>
      <p>Count: <b>{count}</b></p>
      <button onClick={increment}>Increment (delayed)</button>
      <p style={{ color: 'gray', marginTop: 8 }}>
        <b>Problem:</b> If you click "Increment" several times quickly, only the first click may work.<br />
        This is because the callback closes over a stale value of <b>count</b>.<br />
        Zustand users often hit this issue with async actions or setTimeout/setInterval.
      </p>
    </div>
  );
}

// Example: Zustand fix (single store)

export function ZustandMultipleStoresFixed() {
  // Simulate correct usage: one shared state for all
  const [animals, setAnimals] = React.useState(['cat', 'dog']);
  const renderCount = React.useRef(0);
  renderCount.current++;
  // Inline AnimalBox here
  function AnimalBox({ animal, color }) {
    const renderCount = React.useRef(0);
    renderCount.current++;
    return (
      <div style={{ width: 40, height: 40, background: color || '#eee', border: '1px dashed #aaa', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#888', fontWeight: 'bold', fontSize: 14 }}>
        <span>{animal}</span>
        <span style={{ fontSize: 10, color: '#aaa' }}>#{renderCount.current}</span>
      </div>
    );
  }
  return (
    <div style={{ border: '2px solid green', margin: 8, padding: 8, borderRadius: 8 }}>
      <h4>Zustand: Multiple Stores Fixed Example</h4>
      <p>Render count: <b>{renderCount.current}</b></p>
      <div style={{ marginTop: 4, display: 'flex', gap: 8 }}>
        {animals.map((animal, idx) => (
          <AnimalBox key={idx} animal={animal} color="#cfc" />
        ))}
      </div>
      <button style={{ marginTop: 8, background: '#cfc', border: '1px solid #080', padding: '4px 12px', borderRadius: 4 }} onClick={() => setAnimals((prev) => [...prev, 'dog'])}>Add Dog</button>
      <p style={{ color: 'gray', marginTop: 8 }}>
        <b>Fix:</b> By always using the same store instance, state is shared correctly.<br />
        Adding a dog updates the list for everyone using the store.
      </p>
    </div>
  );
}
