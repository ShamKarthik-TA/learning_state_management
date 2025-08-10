
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

import TodoExample from './TodoExample';
import WeatherExample from './WeatherExample';
import ProductList from './features/activity/ProductList';
import Cart from './features/activity/Cart';
import { ReduxBoilerplateProblem, ReduxMissingSliceFixed } from './features/activity/ReduxConsExamples';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux Toolkit</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        <p>Redux count is {count}</p>
      </div>
      <hr />
      <TodoExample />
      <hr />
      <WeatherExample />
  <ProductList />
  <Cart cart={[]} />
  <ReduxBoilerplateProblem />
  <ReduxMissingSliceFixed />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
