import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


// Dummy addShape action for demonstration
const addShape = (shape) => ({ type: 'shapes/addShape', payload: shape });


// TECHNOLOGY-BASED CON: Redux Toolkit boilerplate and verbosity
import { useRef, useState } from 'react';
export function ReduxBoilerplateProblem() {
  // Simulate a Redux-like state update with lots of boilerplate
  const [shapes, setShapes] = useState(['circle']);
  const renderCount = useRef(0);
  renderCount.current++;
  // Simulate action and reducer
  const addShapeAction = { type: 'shapes/addShape', payload: 'square' };
  function reducer(state, action) {
    switch (action.type) {
      case 'shapes/addShape':
        return [...state, action.payload];
      default:
        return state;
    }
  }
  function dispatch(action) {
    setShapes(prev => reducer(prev, action));
  }
  return (
    <div style={{ border: '2px solid orange', margin: 8, padding: 8, borderRadius: 8 }}>
      <h4>Redux Toolkit: Boilerplate Problem Example</h4>
      <p>Render count: <b>{renderCount.current}</b></p>
      <p>Shapes state: <b>{JSON.stringify(shapes)}</b></p>
      <button style={{ background: '#eee', border: '1px solid #aaa', padding: '4px 12px', borderRadius: 4 }} onClick={() => dispatch(addShapeAction)}>Add Square</button>
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        {shapes.map((shape, idx) => (
          <div key={idx} style={{ width: 40, height: 40, background: '#eee', border: '1px dashed #aaa', borderRadius: shape === 'circle' ? '50%' : 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{shape}</div>
        ))}
      </div>
      <p style={{ color: 'gray', marginTop: 8 }}>
        <b>Problem:</b> Redux requires a lot of boilerplate code (actions, reducers, dispatch) even for simple updates.<br />
        This can make code harder to read and maintain, especially for small apps.
      </p>
    </div>
  );
}

// Example: Redux Toolkit fix (slice added, visual)
export function ReduxMissingSliceFixed() {
  // Simulate shapes state and dispatch
  const [shapes, setShapes] = useState(['circle']);
  const renderCount = useRef(0);
  renderCount.current++;
  const dispatch = (action) => {
    if (action.type === 'shapes/addShape') setShapes((prev) => [...prev, action.payload]);
  };
  return (
    <div style={{ border: '2px solid green', margin: 8, padding: 8, borderRadius: 8 }}>
      <h4>Redux Toolkit: Missing Slice Fixed Example</h4>
      <p>Render count: <b>{renderCount.current}</b></p>
      <p>Shapes state: <b>{JSON.stringify(shapes)}</b></p>
      <button style={{ background: '#cfc', border: '1px solid #080', padding: '4px 12px', borderRadius: 4 }} onClick={() => dispatch(addShape('square'))}>Add Square</button>
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        {shapes.map((shape, idx) => (
          <div key={idx} style={{ width: 40, height: 40, background: '#cfc', border: '1px solid #080', borderRadius: shape === 'circle' ? '50%' : 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{shape}</div>
        ))}
      </div>
      <p style={{ color: 'gray', marginTop: 8 }}>
        With the slice added to the store, state is available and UI/actions work (simulated here).
      </p>
    </div>
  );
}
