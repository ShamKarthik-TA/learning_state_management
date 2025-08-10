import React, { useState, useRef, useMemo } from 'react';

// Example: Split Contexts to avoid unnecessary re-renders
const ColorContext = React.createContext();
const CountContext = React.createContext();

function ColorProvider({ children }) {
  const [color, setColor] = useState('red');
  const value = React.useMemo(() => ({ color, setColor }), [color]);
  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}

function CountProvider({ children }) {
  const [localCount, setLocalCount] = useState(0);
  const value = React.useMemo(() => ({ localCount, setLocalCount }), [localCount]);
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}

function SplitColorBox() {
  const { color } = React.useContext(ColorContext);
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <div style={{ marginTop: 8, width: 40, height: 40, background: color, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
      {renderCount.current}
    </div>
  );
}

function SplitCountControls() {
  const { localCount, setLocalCount } = React.useContext(CountContext);
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <button onClick={() => setLocalCount(c => c + 1)}>Increment Local Count: {localCount}</button>
      <span style={{ color: '#888', fontSize: 12 }}>(Controls render: {renderCount.current})</span>
    </div>
  );
}

function SplitColorControls() {
  const { color, setColor } = React.useContext(ColorContext);
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')} style={{ marginLeft: 8 }}>
      Toggle Color (Color controls render: {renderCount.current})
    </button>
  );
}

export function ContextSplitContextsSolution() {
  // Providers are split, so only relevant consumers re-render
  return (
    <ColorProvider>
      <CountProvider>
        <div style={{ border: '2px solid purple', margin: 8, padding: 8, borderRadius: 8 }}>
          <h4>Context API: Split Contexts Solution Example</h4>
          <SplitCountControls />
          <SplitColorControls />
          <SplitColorBox />
          <p style={{ color: 'gray', marginTop: 8 }}>
            <b>Solution:</b> By splitting contexts, only components that use a specific context re-render when that context changes.<br />
            Try incrementing the local count and toggling the color, and watch the render counts.
          </p>
        </div>
      </CountProvider>
    </ColorProvider>
  );
}


// Example: Context API re-render issue (visual, actually demonstrates the problem)

function ColorBox({ color }) {
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <div style={{ marginTop: 8, width: 40, height: 40, background: color, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
      {renderCount.current}
    </div>
  );
}

export function ContextRerenderProblem() {
  // Simulate context state: both color and localCount are in the same context (bad)
  const [color, setColor] = useState('red');
  const [localCount, setLocalCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current++;
  // ColorBox will re-render every time this parent re-renders
  return (
    <div style={{ border: `2px solid ${color}`, margin: 8, padding: 8, borderRadius: 8 }}>
      <h4>Context API: Re-render Problem Example</h4>
      <p>Parent render count: <b>{renderCount.current}</b></p>
      <button onClick={() => setLocalCount(c => c + 1)}>Increment Local Count: {localCount}</button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')} style={{ marginLeft: 8 }}>Toggle Color</button>
      <ColorBox color={color} />
      <p style={{ color: 'gray', marginTop: 8 }}>
        Notice: Changing <b>localCount</b> (unrelated to color) still re-renders the whole component and the color box, even though only <b>color</b> is global (simulated here).
      </p>
    </div>
  );
}

// Example: Context API fix (split context, visual, actually demonstrates the fix)

const ColorBoxFixed = React.memo(function ColorBoxFixed({ color }) {
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <div style={{ marginTop: 8, width: 40, height: 40, background: color, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
      {renderCount.current}
    </div>
  );
});

export function ContextRerenderFixed() {
  // Simulate splitting context: color is global, localCount is local, and ColorBoxFixed is memoized
  const [color, setColor] = useState('red');
  const [localCount, setLocalCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <div style={{ border: `2px solid ${color}`, margin: 8, padding: 8, borderRadius: 8 }}>
      <h4>Context API: Re-render Fixed Example</h4>
      <p>Parent render count: <b>{renderCount.current}</b></p>
      <button onClick={() => setLocalCount(c => c + 1)}>Increment Local Count: {localCount}</button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')} style={{ marginLeft: 8 }}>Toggle Color</button>
      <ColorBoxFixed color={color} />
      <p style={{ color: 'gray', marginTop: 8 }}>
        Now, only <b>color</b> changes cause the color box to re-render (see number inside box). <b>localCount</b> is fully local and does not trigger unnecessary re-renders (simulated here).
      </p>
    </div>
  );
}
