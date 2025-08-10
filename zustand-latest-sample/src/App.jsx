import Cart from './features/activity/Cart';
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProductList from './features/activity/ProductList';
import CounterExample from './features/counter/CounterExample';
import TodoExample from './features/todo/TodoExample';
import WeatherExample from './features/weather/WeatherExample';

export default function App() {
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
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <CounterExample />
      </div>
      <hr />
      <TodoExample />
      <hr />
      <WeatherExample />
  <ProductList />
  <Cart cart={[]} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
